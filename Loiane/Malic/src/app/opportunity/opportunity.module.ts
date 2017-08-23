import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { OpportunityRoutingModule } from './opportunity.routing.module';

import { OpportunityComponent } from './opportunity.component';
import { OpportunityListComponent } from './opportunity-list/opportunity-list.component';
import { OpportunitySaveComponent } from './opportunity-save/opportunity-save.component';
import { OpportunitySaveResolver } from './guards/opportunity-save.resolver';
import { OpportunityListResolver } from './guards/opportunity-list.resolver';

@NgModule({
    imports: [
        SharedModule,
        OpportunityRoutingModule
    ],
    declarations: [
        OpportunityComponent,
        OpportunityListComponent,
        OpportunitySaveComponent
    ],
    exports: [
        OpportunityComponent
    ],
    providers:[
      OpportunityRoutingModule,
      OpportunityListResolver,
      OpportunitySaveResolver
    ]
})
export class OpportunityModule { }
