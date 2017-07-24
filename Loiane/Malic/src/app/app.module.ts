import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { OpportunityModule } from './opportunity/opportunity.module';
import { CustomerModule } from './customer/customer.module';

import { CustomerService } from "./customer/customer.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OpportunityModule,
    CustomerModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }