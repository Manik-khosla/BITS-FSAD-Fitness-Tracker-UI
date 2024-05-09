import { Component, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import {Router} from '@angular/router';
import * as bootstrap from 'bootstrap'
import { LocalStorageService } from '../session/local-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  userEmail: string = '';
  password: string = '';
  access_token!: string;
  ErrorMessage!: any;
  static SuccessMessage: any;
  SuccessSignupMessage!: string;
  
  constructor(private router: Router ,private localStorage: LocalStorageService, private loginService: LoginService) {}
  
  ngOnInit() {
  if(LoginComponent.SuccessMessage) {
    this.SuccessSignupMessage = LoginComponent.SuccessMessage
    const myToast = bootstrap.Toast.getOrCreateInstance('#showSuccessMsg') 
    myToast.show()
  }
  }

  LoginUser(userEmail: string,password : string) {
  console.log("userEmail:" + userEmail);
  console.log("password:"+ password);
  this.loginService.loginUser(userEmail,password).subscribe(
    res=> {
      if(res.access_token) {
        this.access_token = res.access_token
        console.log("Access token Received -" + this.access_token)
        this.localStorage.setJWTToken(this.access_token)
        this.loginService.updateLoginStatus()
      }
    },
    errorResponse => {
      for(var key in errorResponse.error) {
      if(errorResponse.error){
      this.ErrorMessage = errorResponse.error['error']
      const myToast = bootstrap.Toast.getOrCreateInstance('#showErrorMsg') 
      myToast.show()
      }
    }
    }
  );
  }  

}
