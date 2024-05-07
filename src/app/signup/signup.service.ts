import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  signupURL ="api/signup/user"
  constructor(private http: HttpClient) {}

  signupUser(user: User) {
   return this.http.post<User> (this.signupURL, user, {responseType: 'json'});
  }
}
