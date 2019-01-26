import { Component } from '@angular/core';
import { User } from '../models/user/model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class userComponent  {
  @Input() userList: User [];
  @Output() clickSender = new EventEmitter();

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
