import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user.model';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent {
constructor(private userService: UserService) { }

  submitRegistration(firstName: string, lastName: string, companyName: string, jobTitle: string, email: string, password: string, confirmPassword: string) {
    firebase.auth().createUserWithEmailAndPassword(email,password)
    let newUser: User = new User(firstName, lastName, companyName, jobTitle, email, password, confirmPassword);
    this.userService.addNewUser(newUser)
  }
}
