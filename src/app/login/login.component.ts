import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
@Input(): childSelectedUser: User;
@Output(): clickedLogin: new EventEmitter;

login(){
  this.clickedLogin.emit();
}

}
