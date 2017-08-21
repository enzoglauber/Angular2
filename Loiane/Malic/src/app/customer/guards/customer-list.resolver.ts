import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Customer } from './../customer.model';
import { CustomerService } from './../customer.service';

@Injectable()
export class CustomerListResolver implements Resolve<Customer> {
    constructor(private $customer: CustomerService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
        console.log('Customer Resolve');
        
        return this.$customer.list();
    }
}