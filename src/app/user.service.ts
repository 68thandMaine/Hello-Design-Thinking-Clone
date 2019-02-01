import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
users: FirebaseListObservable<any[]>;

constructor(private database: AngularFireDatabase) {
this.users = database.list('users');
 }

getUsers() {
  return this.users
}

addNewUser(newUser: User) {
  this.users.push(newUser);
}

getUserByEmail(email: string){
  return this.database.object('users/' + email)
}

updateInformation(localUpdatedUserInfo) {
  let userEntryInFirebase = this.getUserByEmail(localUpdatedUserInfo.$key);
  userEntryInFirebase.update({frist_name: localUpdatedUserInfo.first_name, last_name: localUpdatedUserInfo.last_name, company_name: localUpdatedUserInfo.company_name, job_title: localUpdatedUserInfo.job_title, email: localUpdatedUserInfo.email, password: localUpdatedUserInfo.pasword, confirm_pWord: localUpdatedUserInfo.confirm_pWord})
}

deleteUser(localUserToDelete) {
  let userEntryInFirebase = this.getUserByEmail(localUserToDelete.$key);
  userEntryInFirebase.remove();
}


}
