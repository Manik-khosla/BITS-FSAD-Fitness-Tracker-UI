import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers: [User]
})
export class SignupComponent {
  
  user: User;
 
  constructor(user:User) { 
  this.user = new User;
  }

  SignupUser(user: User) {
   console.log( " user details"   
   + "\nfirstname=" + user.firstname 
   + "\nlastname=" + user.lastname 
   + "\nemail=" + user.email
   + "\npassword=" + user.password
   + "\nage=" + user.age)

   
  }


}
