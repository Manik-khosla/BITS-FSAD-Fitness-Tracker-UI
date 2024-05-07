import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import {Router} from '@angular/router';

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

  constructor(private router: Router ,private loginService: LoginService) {}

  LoginUser(userEmail: string,password : string) {
  console.log("userEmail:" + userEmail);
  console.log("password:"+ password);
  this.loginService.loginUser(userEmail,password)
  this.router.navigate(['dashboard']); 
  }

}
