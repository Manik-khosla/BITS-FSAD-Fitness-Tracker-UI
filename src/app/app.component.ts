import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
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

  constructor(private router: Router, private loginService: LoginService, private localStorage: LocalStorageService) {
    if (localStorage.getJWTToken()) {
      this.isUserLoggedIn = true
      this.GetUserDetails()
    } else {
      this.loginService.getLoginStatus().subscribe(res => {
        this.isUserLoggedIn = res;
        console.log("In App component set Property isUserLoggedIn " + this.isUserLoggedIn)
        this.GetUserDetails()
      })
    }
  }

  Login() {
    this.router.navigate(['login']);
    document.getElementById("navbar-toggle-btn")?.click();
  }

 async GetUserDetails() {
  if(this.LoggedInUserDetails.email) {
    return this.LoggedInUserDetails
  }else {
  await this.loginService.getLoggedInUserDetails().then(userInfo => {
      this.LoggedInUserDetails.firstname = userInfo.user.first_name
      this.LoggedInUserDetails.id = userInfo.user.id
      this.router.navigate(['../dashboard']);
    })
    return this.LoggedInUserDetails;
  }
}

  SignupNewUser() {
    this.router.navigate(['signup']);
    document.getElementById("navbar-toggle-btn")?.click();
  }

  LogoutUser() {
    this.loginService.logoutUser().subscribe(response => {
      if (response.message == "Signed out successfully") {
        this.isUserLoggedIn = false;
        this.localStorage.DeleteJWTToken();
        this.router.navigate(['home'])
      }
    })
  }

}
