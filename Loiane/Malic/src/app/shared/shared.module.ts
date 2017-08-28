import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CamelCasePipe } from '../shared/camel-case.pipe';
import { FundoAmareloDirective } from './fundo-amarelo.directive';
import { HighlightMouseDirective } from './highlight-mouse.directive';
import { HighlightDirective } from './highlight.directive';

import { FormDebugComponent } from './form-debug/form-debug.component';

@NgModule({
  imports: [ CommonModule, FormsModule, RouterModule, HttpModule, ReactiveFormsModule ],
  declarations: [ CamelCasePipe, FundoAmareloDirective, HighlightMouseDirective, HighlightDirective, FormDebugComponent],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule,
    CamelCasePipe,
    FundoAmareloDirective,
    HighlightMouseDirective,
    HighlightDirective,
    FormDebugComponent,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
