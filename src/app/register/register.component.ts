import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() sendNewUser = new EventEmitter;

  submitRegistration(firstName: string, lastName: string, companyName: string, jobTitle: string, email: string, password: string, confirmPassword: string) {
    let newUser: User = new User(firstName, lastName, companyName, jobTitle, email, password, confirmPassword);
    this.sendNewUser.emit(newUser)
  }
}
