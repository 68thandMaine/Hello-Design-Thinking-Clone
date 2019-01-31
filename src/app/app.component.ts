import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './models/user.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Design Thinking Clone';
 ngOnInit(){

  $(document).ready(function(){
    $("#registerLoginForm").hide();

    $("#registerButton").click(function(){
      $("#registerLoginForm").show();
    })
  })
}
}
