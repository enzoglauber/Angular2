// import { FormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterializeModule } from 'angular2-materialize';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { routing } from "./app.routes";
import { AppComponent } from './app.component';
import { OpportunityModule } from './opportunity/opportunity.module';
import { CustomerService } from './customer/customer.service';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';

import { SettingsService } from './settings.service';


@NgModule({
  declarations: [
    AppComponent,
    FundoAmareloDirective,
    HighlightMouseDirective,
    HighlightDirective
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    // FormsModule,
    AuthModule,
    OpportunityModule,
    CustomerModule,
    routing
  ],
  providers: [
    // SettingsService, 
    // { 
    //   provide: LOCALE_ID,
    //   deps:[SettingsService],
    //   useFactory: (settings) => settings.getLocale()
    //   // useValue:'pt-BR' //en_US
    // },
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
