import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { LoginComponent } from "./auth/login/login.component";
import { CustomerComponent } from "./customer/customer.component";
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { OpportunityComponent } from "./opportunity/opportunity.component";

const ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'customer/:page', component: CustomerComponent },
    { path: 'customer/edit/:id', component: CustomerEditComponent },
    { path: 'opportunity/:page', component: OpportunityComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot( ROUTES, { enableTracing: !true } );