import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './login/user';

@Injectable()
export class AuthService {
  private auth: boolean = false;

  constructor(private router: Router) { }

  login (user: User) {
    if (user.name === 'user' && user.password === '123') {
      this.auth = true;
      this.router.navigate(['/customer/list', 1]);
    } else {
      this.auth = false;
    }
  }

  isAuth () {
    return this.auth;
  }
}
