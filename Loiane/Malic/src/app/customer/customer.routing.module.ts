import { NgModule, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CustomerComponent } from "./customer.component";
import { CustomerSaveComponent } from './customer-save/customer-save.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDeactivateGuard } from './../guards/customer-deactivate.guard';
import { CustomerListResolver } from './guards/customer-list.resolver';
import { CustomerSaveResolver } from './guards/customer-save.resolver';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CustomerComponent, resolve: { data : CustomerListResolver },
            children: [
                { path: 'save', component: CustomerComponent, children: [
                    { path: '', component: CustomerSaveComponent },
                    { path: ':id', component: CustomerSaveComponent, canDeactivate: [CustomerDeactivateGuard], 
                        resolve: { entity : CustomerSaveResolver }
                    }
                ] },
                { path: 'list/:page', component: CustomerListComponent, resolve: { data : CustomerListResolver } }
            ]}
    ])],
    exports: [RouterModule]
})
export class CustomerRoutingModule {}