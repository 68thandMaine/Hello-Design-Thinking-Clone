import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Design Thinking Clone';
  masterUserList: User[] = [
    new User("Chris", "Rudnicky", "Epicodus","Student", "chrisrudnicky@gmail.com", "password123", "password123"),
    new User("Shaina", "Morales", "Pep Co","Screen Printer", "smo@pepco.com", "password123", "password123")
   ];





addUser(newUser: User) {
  this.masterUserList.push(newUser);
}
}
