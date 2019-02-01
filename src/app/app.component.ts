<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './models/user.model';
>>>>>>> testBranch
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Design Thinking Clone';
<<<<<<< HEAD

=======
 ngOnInit(){
>>>>>>> testBranch

  $(document).ready(function(){

    $("#registerButton").click(function(){
      $(".registerLoginForm").slideDown();
      $("#registration").show();
    })
    $("#loginButton").click(function(){
      $(".registerLoginForm").slideDown();
      $("#login").show();
    })
  })
}
}
