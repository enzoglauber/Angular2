import { NgModule,ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./auth/login/login.component";
import { CustomerComponent } from "./customer/customer.component";
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { OpportunityComponent } from "./opportunity/opportunity.component";

@NgModule({
    imports: [RouterModule.forRoot([
        { path: 'login', component: LoginComponent },
        { path: 'customer/:page', component: CustomerComponent },
        { path: 'customer/edit/:id', component: CustomerEditComponent },
        { path: 'opportunity/:page', component: OpportunityComponent }
    ], { enableTracing: !true } )],
    exports: [RouterModule]
})
export class AppRoutesModule {}