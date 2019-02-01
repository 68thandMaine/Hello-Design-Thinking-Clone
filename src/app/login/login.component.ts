import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})

export class LoginComponent {
user;
private isLoggedIn: Boolean;
private userName: String;
private userEmail: String;

constructor(private router: Router, public authService: AuthenticationService) {
  this.authService.user.subscribe(user =>  {
    if (user == null) {
            this.isLoggedIn = false;
          } else {
            this.isLoggedIn = true;
            this.userName = user.email;
            this.userEmail = user.uid;
          console.log(this.userName);
          console.log(user.providerData)
          console.log(this.userEmail);
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
