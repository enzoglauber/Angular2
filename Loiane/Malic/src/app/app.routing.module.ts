import { NgModule,ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./auth/login/login.component";
import { OpportunityComponent } from "./opportunity/opportunity.component";

@NgModule({
    imports: [RouterModule.forRoot([
        { path: 'login', component: LoginComponent },
        { path: 'opportunity/list/:page', component: OpportunityComponent }
    ], { enableTracing: true } )],
    exports: [RouterModule]
})
export class AppRoutesModule {}