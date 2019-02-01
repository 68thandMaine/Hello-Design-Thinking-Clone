import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserService {
users: FirebaseListObservable<any[]>;
userEmail: string;

constructor(private database: AngularFireDatabase, private afAuth: AngularFireAuth) {
this.afAuth.authState.subscribe(user => {
  if(user) this.userEmail =user.uid
})
 }



getUsers() {
  return this.users
}

addNewUser(newUser: User) {
  this.users.push(newUser);
}

getUserById(id: string){
  return this.database.object('users/' + id)
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
