import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { CustomerComponent } from "./customer/customer.component";
import { AuthComponent } from "./auth/auth.component";
import { OpportunityComponent } from "./opportunity/opportunity.component";
const APP_ROUTES: Routes = [
    {
        path: 'login',
        component: AuthComponent
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