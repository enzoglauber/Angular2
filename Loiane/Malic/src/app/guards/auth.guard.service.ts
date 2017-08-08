import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CanActivate, ActivatedRouteSnapshot, RouteStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor() { }
  CanActivate (
    route: ActivatedRouteSnapshot,
    state: RouteStateSnapshot
  ): Observable<boolean>{
    return true;
  }
}
