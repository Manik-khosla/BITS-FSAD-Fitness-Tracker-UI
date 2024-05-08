import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../signup/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BaseURL = "http://localhost:3000/"
  loginURL = this.BaseURL + "api/v1/sessions/sign_in"
  GetUserDetailsURL = this.BaseURL + "api/v1/sessions/"
  isLoginSuccess$ = new BehaviorSubject<boolean>(false);
  access_token!: String; 
  

  constructor(private http: HttpClient) { }

  loginUser(userEmail: string, password: string) {
    var creds = { "email": userEmail, "password": password }
    return this.http.post<any>(this.loginURL, creds, { responseType: 'json', observe: 'body' })
  }
   
  setAccessToken(token:String) {
    this.access_token = token
  }

  updateLoginStatus() {
    this.isLoginSuccess$.next(true)
  }

  getLoginStatus() {
    return this.isLoginSuccess$.asObservable();
  }

  getLoggedInUserDetails() {
    return this.http.get<any>(this.GetUserDetailsURL,{headers : {'Authorization': 'Bearer ' + this.access_token}, responseType: 'json', observe: 'body'})
   }
}
