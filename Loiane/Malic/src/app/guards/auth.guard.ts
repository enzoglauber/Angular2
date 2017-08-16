import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';

import { AuthService } from './../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private $auth: AuthService,
    private router: Router
  ) { }

  private checkAccess(){
    if (this.$auth.isAuth()) {
      return true
    }
    this.router.navigate(['/login'])
    return false;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log('AuthGuard');
    return this.checkAccess();
  }
  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    console.log('canLoad: verificando se usuário pode carregar o cod módulo');
    return this.checkAccess();
  }
}
