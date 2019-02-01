import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})

export class LoginComponent {
user;

constructor(public authService: AuthenticationService) {
  this.authService.user.subscribe(user =>  {
    
  });
}

login(email, password) {
  this.authService.login(email, password);
}

logout() {
  this.authService.logout();
}
}
