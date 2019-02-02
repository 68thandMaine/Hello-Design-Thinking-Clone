import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService, UserService]
})

export class LoginComponent {
user;
private isLoggedIn: Boolean;
private userEmail: String;

constructor(private router: Router, public authService: AuthenticationService) {
  this.authService.user.subscribe(user =>  {
    if (user == null) {
            this.isLoggedIn = false;
          } else {
            this.isLoggedIn = true;
            this.userEmail = user.email;
          console.log("This is the return of the user email from authentication: " + this.userEmail);
          }
        });
      }

login(email, password) {
  this.authService.login(email, password);
  // this.router.navigate(['profile', email.$key])
}

logout() {
  this.authService.logout();
}
}
