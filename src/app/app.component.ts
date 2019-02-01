import { Component } from '@angular/core';
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
