import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './login/user';

@Injectable()
export class AuthService {
  private isAuth: boolean = false;

  constructor(private router: Router) { }

  login (user: User) {
    if (user.name === 'user' && user.password === '123') {
      this.isAuth = true;
      this.router.navigate(['/customer/list', 1]);
    } else {
      this.isAuth = false;
    }
  }
}
