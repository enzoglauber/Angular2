import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private user: User = new User();
  constructor(private $auth: AuthService) { }

  ngOnInit() {
    this.user = {name:'user', password:'123'};
  }
  
  login() {
    console.log("legal", this.user,this.$auth);
    this.$auth.login(this.user);
  }
}
