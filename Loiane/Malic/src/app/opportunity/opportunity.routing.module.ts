import { NgModule, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { OpportunityComponent } from "./opportunity.component";
import { OpportunitySaveComponent } from './opportunity-save/opportunity-save.component';
import { OpportunityListComponent } from './opportunity-list/opportunity-list.component';

import { OpportunityListResolver } from './guards/opportunity-list.resolver';
import { OpportunitySaveResolver } from './guards/opportunity-save.resolver';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: OpportunityComponent, resolve: { data : OpportunityListResolver },
            children: [
                { path: 'save', component: OpportunityComponent, children: [
                    { path: '', component: OpportunitySaveComponent },
                    { path: ':id', component: OpportunitySaveComponent, 
                        resolve: { entity : OpportunitySaveResolver }
                    }
                ] },
                { path: 'list/:page', component: OpportunityListComponent, resolve: { data : OpportunityListResolver } }
            ]}
    ])],
    exports: [RouterModule]
})
export class OpportunityRoutingModule {}