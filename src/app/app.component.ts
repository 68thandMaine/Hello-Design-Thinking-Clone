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

<<<<<<< HEAD
=======
currentUser: User = null;


// pseud code below
// editUser(email, password){
//   for(leti=0; i<masterUserList.length; i++)
//   if(email === masterUserList[i].email && password == masterUserList[i].password){
//     this.currentUser = masterUserList[i];
//   }
// }

finishedEditing() {
  this.currentUser = null;
}

addUser(newUser: User) {
  this.masterUserList.push(newUser);
}
>>>>>>> 64f6dbf902d884ded7329bf72a148566f909cf6b
}
