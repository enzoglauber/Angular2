import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';

import { FormCanDeactivate } from './form-caneactivate';
import { CustomerSaveComponent } from './../customer/customer-save/customer-save.component';

@Injectable()
export class CustomerDeactivateGuard implements CanDeactivate<FormCanDeactivate> {
    canDeactivate(
        component: FormCanDeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        console.log("Deactivate", state, component.deactivate());
        // return !component.deactivate();
        return true;
    }
}
