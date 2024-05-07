import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../signup/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoginSuccess$ = new BehaviorSubject<boolean>(false);
  LoggedInUserDetails!: User;

  constructor(private http: HttpClient) {}

  loginUser(userEmail: string, password: string) {
   var creds = {"userEmail": userEmail, "password": password}
  // return this.http.post<User> (this.loginURL,creds, {responseType: 'json'}).subscribe(response =>
  //  {
  //  if(response) {
  //   this.isLoginSuccess$.next(true);
  //   console.log("User Login Success")
  //   return {"id":1, "firstname":"Manik","age":27}
  //  }
  //  })
  this.LoggedInUserDetails = {"id":1, "firstname":"Manik","age":27, "lastname":"khosla", "email":"manik6894", "password":""}
  this.isLoginSuccess$.next(true);
  console.log("User Login Success")
    
}

getLoginStatus() {
  return this.isLoginSuccess$.asObservable();
}

getLoggedInUserDetails() {
  return this.LoggedInUserDetails
}

}
