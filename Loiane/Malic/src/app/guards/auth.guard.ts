import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { AuthService } from './../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private $auth: AuthService,
    private router: Router
  ) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    if (this.$auth.isAuth()) {
      return true
    }
    this.router.navigate(['/login'])
    return false;
  }
}
