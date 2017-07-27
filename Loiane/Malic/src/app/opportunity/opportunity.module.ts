import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunityComponent } from './opportunity.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        OpportunityComponent
    ],
    exports: [
        OpportunityComponent
    ]
})
export class OpportunityModule { }
