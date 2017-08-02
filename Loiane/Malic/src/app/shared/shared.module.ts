import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FundoAmareloDirective } from './fundo-amarelo.directive';
import { HighlightMouseDirective } from './highlight-mouse.directive';
import { HighlightDirective } from './highlight.directive';
import { CamelCasePipe } from '../shared/camel-case.pipe';

@NgModule({
  imports: [ CommonModule, FormsModule, RouterModule, HttpModule ],
  declarations: [ CamelCasePipe, FundoAmareloDirective, HighlightMouseDirective, HighlightDirective],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    CamelCasePipe,
    FundoAmareloDirective,
    HighlightMouseDirective,
    HighlightDirective,
  ]
})
export class SharedModule { }
