import { NgModule,ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from './guards/auth.guard';
import { CustomerGuard } from './guards/customer.guard';
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from './auth/register/register.component';
import { ResetComponent } from './auth/reset/reset.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { OpportunityComponent } from "./opportunity/opportunity.component";

@NgModule({
    imports: [RouterModule.forRoot([
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'reset-password', component: ResetComponent },
        
        {
            path: 'opportunity/list/:page',
            component: OpportunityComponent,
            canActivate: [AuthGuard],
            canLoad: [AuthGuard]
        }, {
            path: 'customer', 
            loadChildren: 'app/customer/customer.module#CustomerModule', 
            canActivate: [AuthGuard],
            canLoad: [AuthGuard],
            canActivateChild: [CustomerGuard]
        },
        { path:'', redirectTo: 'login', pathMatch: 'full' },
        { path:'**', component: PageNotFoundComponent }
    ], { enableTracing: !true } )],
    exports: [RouterModule]
})
export class AppRoutesModule {}