import { Component, OnInit } from '@angular/core';
import { ProfileserviceService } from '../profileservice.service';
import { Profile } from '../profile';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  clickMessage = '';
  profile: any;

  Prof: Profile[] = [];
  selectedProfile: Profile;
  profiles;
  /* =
  [
      {
        firstname: 'mahesh',
        lastname: 'venkat',
        email: 'mvenkata' },
      {
        firstname: 'abc',
        lastname: 'def',
        email: 'mvenkata'
      },


  ];
  */
  constructor(private http: HttpClient,private service: ProfileserviceService) {
     this.readAdUnit();
   }

  ngOnInit(){
   // this.readAdUnit();
    this.getProfile();
      }


  getProfile() {
    this.service.getProfile().subscribe(res => {
      this.profile = res;
    });
  }

  readAdUnit() {
    this.service.readAdUnit().subscribe(res => {
      this.profiles = res;
      console.log(this.profiles);
    });;
    // this.profiles = this.service.Profiles;

  }


  onSelectedProfile(user: any){
    this.selectedProfile = user;
  }


  deleteProfile(id) {
    this.service.deleteProfile(id).subscribe(res => {
      //console.log(id);
this.readAdUnit();
    });
  }
  }
