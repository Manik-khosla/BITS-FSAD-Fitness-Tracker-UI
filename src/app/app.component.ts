import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import { LoginService } from './login/login.service';
import {CommonModule} from '@angular/common';
import { User } from './signup/user';

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
  LoggedInUserDetails!: User;

  constructor(private router: Router, private loginService: LoginService) {
    this.loginService.getLoginStatus().subscribe ( res => {
    this.isUserLoggedIn = res;
    console.log("In App component set Property isUserLoggedIn " + this.isUserLoggedIn)
    this.LoggedInUserDetails = loginService.getLoggedInUserDetails()
     })  
}

  Login() {
    this.router.navigate(['login']);
    document.getElementById("navbar-toggle-btn")?.click();
  }

  SignupNewUser() {
    this.router.navigate(['signup']);
  }

  Logout() {

  }

}
