import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor() { }

  submitRegistration() {
    let first_Name = $("#firstName").val();
    let last_Name = $("#lastName").val();
    let company_Name = $("#companyName").val();
    let job_Title = $("#jobTitle").val();
    let email = $("#email").val();
    let password = $("#password").val();

  }
}
