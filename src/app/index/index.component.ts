import { ProfileserviceService } from '../profileservice.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  profile: any;

  constructor(private http: HttpClient, private service: ProfileserviceService) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.service.getProfile().subscribe(res => {
      this.profile = res;
    });
  }
}
