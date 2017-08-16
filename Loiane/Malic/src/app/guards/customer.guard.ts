import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot, CanActivateChild } from '@angular/router';

@Injectable()
export class CustomerGuard implements CanActivateChild {
  constructor() { }
  canActivateChild (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log('customer guard de rota filha', route, state);
    
    return true;
    // if (this.$auth.isAuth()) {
    //   return true
    // }
    // this.router.navigate(['/login'])
    // return false;
  }
}
