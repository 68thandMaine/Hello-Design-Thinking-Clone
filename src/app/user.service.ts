import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class UserService {
users: FirebaseListObservable<any[]>;

constructor(private database: AngularFireDatabase) {
this.users = database.list('users');
 }

getUsers() {
  return this.users
}

newUser(newUser: User) {
  this.users.push(newUser);
}

getUserById(userId: string){
  return this.database.object('users/' + userId)
}

updateInformation(localUpdatedUserInfo) {
  let userEntryInFirebase = this.getUserById(localUpdatedUserInfo.$key);
  userEntryInFirebase.update({frist_name: localUpdatedUserInfo.first_name, last_name: localUpdatedUserInfo.last_name, company_name: localUpdatedUserInfo.company_name, job_title: localUpdatedUserInfo.job_title, email: localUpdatedUserInfo.email, password: localUpdatedUserInfo.pasword, confirm_pWord: localUpdatedUserInfo.confirm_pWord})
}

deleteUser(localUserToDelete) {
  let userEntryInFirebase = this.getUserById(localUserToDelete.$key);
  userEntryInFirebase.remove();
}


}
