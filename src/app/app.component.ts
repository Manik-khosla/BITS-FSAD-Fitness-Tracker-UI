import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fitness-Tracker';

  constructor(private router: Router) {}

  Login() {
    this.router.navigate(['login']);
    document.getElementById("navbar-toggle-btn")?.click();
  }

  SignupNewUser() {
    this.router.navigate(['signup']);
  }
}
