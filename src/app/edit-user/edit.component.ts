import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'
import { UserService } from '../user.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { User } from '../models/user.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [UserService]
})

export class EditComponent implements OnInit {
  user;
  userId: string;
  userToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userId = urlParameters['id'];
    });
    this.userToDisplay = this.userService.getUserById(this.userId);

    // beginUpdatingUser(userToUpdate) {
    //   this.userService.updateInformation(userToUpdate);
    // }
    $(document).ready(function(){

      $('editUserInformation').hide();


      $('#editUser').click(function(){
        $('#editUserInformation').slideDown()
      })
    })
  }

}
