import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { CustomerRoutingModule } from './customer.routing.module';
import { CustomerDeactivateGuard } from './../guards/customer-deactivate.guard';

import { CustomerComponent } from './customer.component';
import { CustomerSaveComponent } from './customer-save/customer-save.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  imports: [
    SharedModule,
    CustomerRoutingModule
  ],
  declarations: [
    CustomerComponent,
    CustomerSaveComponent,
    CustomerListComponent
  ],
  exports: [
    CustomerComponent
  ],
  providers:[
    CustomerRoutingModule,
    CustomerDeactivateGuard
  ]
})
export class CustomerModule { }
