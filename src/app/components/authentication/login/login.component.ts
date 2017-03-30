import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userData: User = new User();
  callInProgress: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  submit = ():void => {
    this.callInProgress = true;
  }

}
