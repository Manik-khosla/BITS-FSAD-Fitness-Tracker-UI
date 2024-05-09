import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { URLGenerator } from '../URLGenerator';
import { catchError, throwError } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from './signup.component';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  errorMessage!: String; 
  constructor(private http: HttpClient) {}

  signupUser(user: User) {
    var payload = {
      "user" : {
        "first_name": user.firstname,
        "last_name": user.lastname,
        "email": user.email,
        "password": user.password,
        "age":user.age
      }
    }
   return this.http.post<any> (URLGenerator.SignupURL, payload, {responseType: 'json', observe : 'body'})
  }

}
