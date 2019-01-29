import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class userComponent  {
  @Input() userList: User [];
  @Output() clickSender = new EventEmitter();

  constructor() { }


}
