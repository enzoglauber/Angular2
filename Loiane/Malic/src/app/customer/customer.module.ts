import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { AppCustomerRoutesModule } from './customer.routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerSaveComponent } from './customer-save/customer-save.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  imports: [
    SharedModule,
    AppCustomerRoutesModule
  ],
  declarations: [
    CustomerComponent,
    CustomerSaveComponent,
    CustomerListComponent
  ],
  exports: [
    CustomerComponent
  ]
})
export class CustomerModule { }
