import { NgModule,ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from './auth/register/register.component';
import { ResetComponent } from './auth/reset/reset.component';

import { OpportunityComponent } from "./opportunity/opportunity.component";

@NgModule({
    imports: [RouterModule.forRoot([
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'reset-password', component: ResetComponent },
        { path: 'opportunity/list/:page', component: OpportunityComponent },
        
        { path: 'customer', loadChildren: 'app/customer/customer.module#CustomerModule' },
    ], { enableTracing: !true } )],
    exports: [RouterModule]
})
export class AppRoutesModule {}