import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	CustomerComponent,
  	CustomerListComponent
  ],
  exports: [
  	CustomerComponent
  ]
})
export class CustomerModule { }
