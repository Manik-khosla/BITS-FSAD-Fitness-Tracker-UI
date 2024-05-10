import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { URLGenerator } from '../URLGenerator';
import { LocalStorageService } from '../session/local-storage.service'
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoginSuccess$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }

  loginUser(userEmail: string, password: string) {
    var creds = { "email": userEmail, "password": password }
    return this.http.post<any>(URLGenerator.LoginURL, creds, { responseType: 'json', observe: 'response', withCredentials: true  })
  }
   
  setAccessToken(token:string) {
    this.localStorage.setJWTToken(token)
  }

  updateLoginStatus() {
    this.isLoginSuccess$.next(true)
  }

  getLoginStatus() {
    return this.isLoginSuccess$.asObservable();
  }

  getLoggedInUserDetails() {
    return this.http.get<any>(URLGenerator.GetUserDetailsURL,{headers : {'Authorization': 'Bearer ' + this.localStorage.getJWTToken()}, responseType: 'json', observe: 'body'})
   }

   logoutUser() {
    return this.http.delete<any>(URLGenerator.LogoutURL, {headers : {'Authorization': 'Bearer ' + this.localStorage.getJWTToken()}, responseType: 'json', observe: 'body',  withCredentials: true })
   }
}
