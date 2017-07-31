import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

import { CamelCasePipe } from '../shared/camel-case.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    CamelCasePipe
  ],
  exports: [
    CustomerComponent
  ]
})
export class CustomerModule { }
