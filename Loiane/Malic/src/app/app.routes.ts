import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { CustomerComponent } from "./customer/customer.component";
import { OpportunityComponent } from "./opportunity/opportunity.component";
import { LoginComponent } from "./auth/login/login.component";
const APP_ROUTES: Routes = [
    { 
        path: 'login',
        component: LoginComponent 
    },
    { 
        path: 'customer',
        component: CustomerComponent 
    },
    { 
        path: 'opportunity',
        component: OpportunityComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);