import { NgModule,ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CustomerComponent } from "./customer.component";
import { CustomerSaveComponent } from './customer-save/customer-save.component';
import { CustomerListComponent } from './customer-list/customer-list.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: 'customer', component: CustomerComponent, children: [
            { path: 'save', component: CustomerComponent, children: [
                { path: '', component: CustomerSaveComponent },
                { path: ':id', component: CustomerSaveComponent }
            ] },
            { path: 'list/:page', component: CustomerListComponent }
        ]}
    ])],
    exports: [RouterModule]
})
export class AppCustomerRoutesModule {}