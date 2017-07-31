import { NgModule, LOCALE_ID } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { OpportunityModule } from './opportunity/opportunity.module';
import { CustomerService } from './customer/customer.service';
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
    BrowserModule,
    BsDropdownModule.forRoot(),
    // FormsModule,
    OpportunityModule,
    CustomerModule
  ],
  providers: [
    SettingsService, 
    { 
      provide: LOCALE_ID,
      deps:[SettingsService],
      useFactory: (settings) => settings.getLocale()
      // useValue:'pt-BR' //en_US
    },
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
