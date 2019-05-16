import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  profile: any;
  angForm: FormGroup;
  title = 'Edit Profile';
  constructor(private route: ActivatedRoute, private router: Router, private service: ProfileserviceService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  updateProfile(firstname, lastname, email,id) {
    this.route.params.subscribe(params => {
    this.service.updateProfile(firstname, lastname, email,params[id]);
    this.router.navigate(['index']);
    });
  }
  deleteProfile(id) {
    this.service.deleteProfile(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.profile = this.service.editProfile(params['id']).subscribe(res => {
        this.profile = res;
      });
    });
  }
}
