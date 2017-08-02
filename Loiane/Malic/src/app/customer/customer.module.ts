import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    CustomerEditComponent
  ],
  exports: [
    CustomerComponent
  ]
})
export class CustomerModule { }
