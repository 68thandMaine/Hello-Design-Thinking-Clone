import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';
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

constructor(private router: Router, public authService: AuthenticationService) {
  this.authService.user.subscribe(user =>  {
    if(user) {


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
