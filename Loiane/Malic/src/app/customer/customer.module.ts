import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule
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
