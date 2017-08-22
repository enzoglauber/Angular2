import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Opportunity } from './../opportunity.model';
import { OpportunityService } from './../opportunity.service';

@Injectable()
export class OpportunitySaveResolver implements Resolve<Opportunity> {
    constructor(private $opportunity: OpportunityService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
        console.log('RESOLVE');
        return this.$opportunity.get(route.params.id);
    }
}