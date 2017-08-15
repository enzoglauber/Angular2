import { NgModule,ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CustomerComponent } from "./customer.component";
import { CustomerSaveComponent } from './customer-save/customer-save.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDeactivateGuard } from './../guards/customer-deactivate.guard';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CustomerComponent, children: [
            { path: 'save', component: CustomerComponent, children: [
                { path: '', component: CustomerSaveComponent },
                { path: ':id', component: CustomerSaveComponent, canDeactivate: [CustomerDeactivateGuard] }
            ] },
            { path: 'list/:page', component: CustomerListComponent }
        ]}
    ])],
    exports: [RouterModule]
})
export class CustomerRoutingModule {}