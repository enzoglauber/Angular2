import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterializeModule } from 'angular2-materialize';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// import { routes } from "./app.routes";
import { AppComponent } from './app.component';
import { OpportunityModule } from './opportunity/opportunity.module';
import { CustomerService } from './customer/customer.service';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { AppRoutesModule } from "./app.routing.module";

import { SettingsService } from './settings.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutesModule,
    AuthModule,
    SharedModule,
    CustomerModule,
    OpportunityModule
  ],
  providers: [
    SettingsService, 
    { 
      provide: LOCALE_ID,
      deps:[SettingsService],
      useFactory: (settings) => settings.getLocale()
    },
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
