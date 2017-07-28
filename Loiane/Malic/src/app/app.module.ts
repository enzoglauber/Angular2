import { NgModule } from '@angular/core';
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
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
