import { NgModule,ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CustomerComponent } from "./customer.component";
import { CustomerSaveComponent } from './customer-save/customer-save.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'customer/:page', component: CustomerComponent },
        { path: 'customer/save', component: CustomerSaveComponent, children: [
            { path: '/:id', component: CustomerSaveComponent }
        ] },
        { path: 'customer/save/:id', component: CustomerSaveComponent }
    ])],
    exports: [RouterModule]
})
export class AppCustomerRoutesModule {}