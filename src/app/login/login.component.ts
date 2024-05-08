import { Component, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import {Router} from '@angular/router';
import { User } from '../signup/user';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userEmail: string = '';
  password: string = '';
  access_token!: string;
  
  constructor(private router: Router ,private loginService: LoginService) {}

  LoginUser(userEmail: string,password : string) {
  console.log("userEmail:" + userEmail);
  console.log("password:"+ password);
  this.loginService.loginUser(userEmail,password).subscribe(
    res=> {
      if(res.access_token) {
        this.access_token = res.access_token
        console.log("Login successful. Access token In Response -" + this.access_token)
        this.loginService.setAccessToken(this.access_token)
        this.loginService.updateLoginStatus()
      }
    }
  );
  }  

}
