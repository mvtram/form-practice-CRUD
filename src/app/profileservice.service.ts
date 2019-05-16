import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from './profile';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PROFILE } from './mock-profiles';
@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {
  uri = 'http://localhost:4000/users';
  Profiles: any;
  constructor(private http: HttpClient) {

  }
  addAdUnit(firstname, lastname, email) {
    const obj = {
      firstname,
      lastname,
      email,
    };
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
readAdUnit() {
  return this.http.get(`${this.uri}/list`)

    //, res => console.log(res)

  }
  getProfile() {
    const uri = 'http://localhost:4000/users/list';
    return this
      .http
      .get(uri);
      //.map(res => {return res;});
  }

  editProfile(id) {
    const uri = 'http://localhost:4000/users/edit' + id;
    return this
      .http
      .get(uri);

      //.map(res => {  return res;});
  }

  updateProfile(firstname, lastname, email,id) {
    const uri = 'http://localhost:4000/users/update/' + id;

    const obj = {
      firstname,
      lastname,
      email
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }
  deleteProfile(id) {
    const uri = 'http://localhost:4000/users/delete/' + id;

    return this
      .http
      .delete(uri)
      //.map(res => {return res;});
  }
}
