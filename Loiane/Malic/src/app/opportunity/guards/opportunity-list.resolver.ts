import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Opportunity } from './../opportunity.model';
import { OpportunityService } from './../opportunity.service';

@Injectable()
export class OpportunityListResolver implements Resolve<Opportunity> {
    constructor(private $opportunity: OpportunityService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
        console.log('Opportunity Resolve');
        
        return this.$opportunity.list();
    }
}