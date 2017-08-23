import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from "./app.routing.module";
import { AuthGuard } from './guards/auth.guard';
import { CustomerGuard } from './guards/customer.guard';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { OpportunityModule } from './opportunity/opportunity.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthService } from './auth/auth.service';
import { OpportunityService } from './opportunity/opportunity.service';
import { CustomerService } from './customer/customer.service';
import { SettingsService } from './settings.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    OpportunityModule
  ],
  providers: [
    SettingsService, 
    { 
      provide: LOCALE_ID,
      deps:[SettingsService],
      useFactory: (settings) => settings.getLocale()
    },
    CustomerService,
    OpportunityService,
    AuthService, 
    CustomerGuard,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
