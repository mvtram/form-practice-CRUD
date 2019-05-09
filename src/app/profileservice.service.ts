import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {
  uri = 'http://localhost:4000/users';

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
}
