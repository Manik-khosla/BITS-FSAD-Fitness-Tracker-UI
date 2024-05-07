import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './user';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers: [User, Router]
})
export class SignupComponent {
  
  user: User;
  signupService!: SignupService;
 
  constructor(user:User, signupService: SignupService, private router: Router) { 
  this.user = new User;
  }

  SignupUser(user: User) {
    this.user = user;
   console.log( " user details"   
   + "\nfirstname=" + user.firstname 
   + "\nlastname=" + user.lastname 
   + "\nemail=" + user.email
   + "\npassword=" + user.password
   + "\nage=" + user.age)
   
   this.signupService.signupUser(this.user).subscribe( response => {
    this.user.id = 1
    this.user.firstname = "Manik";
    console.log("user signup completed successfully");
    this.router.navigate(['login']);
   });
   
  }


}
