import { Component, SimpleChanges } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import { User } from './signup/user';
import { LoginService } from './login/login.service';
import { LocalStorageService } from './session/local-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fitness-Tracker'; 
  isUserLoggedIn: boolean = false
  LoggedInUserDetails: User = new User;

  constructor(private router: Router, private loginService: LoginService, localStorage:LocalStorageService) {
    if(localStorage.getJWTToken()){
      this.isUserLoggedIn = true
      loginService.getLoggedInUserDetails().subscribe (userInfo => {
        this.LoggedInUserDetails.firstname = userInfo.user.first_name
        this.router.navigate(['../dashboard']);
      })
    }else{
    this.loginService.getLoginStatus().subscribe (res => {
    this.isUserLoggedIn = res;
    console.log("In App component set Property isUserLoggedIn " + this.isUserLoggedIn)
    loginService.getLoggedInUserDetails().subscribe (userInfo => {
      this.LoggedInUserDetails.firstname = userInfo.user.first_name
      this.router.navigate(['dashboard']);
    })
  
    })
  }
}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  Login() {
    this.router.navigate(['login']);
    document.getElementById("navbar-toggle-btn")?.click();
    
  }

  SignupNewUser() {
    this.router.navigate(['signup']);
    document.getElementById("navbar-toggle-btn")?.click(); 
  }

  Logout() {

  }

}
