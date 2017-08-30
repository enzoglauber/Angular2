import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import * as $ from 'jquery';

@Injectable()
export class CoreService {

  constructor() { }
  
  verifyForm (form: FormGroup) {
    let control;
    Object.keys(form.controls).reverse().forEach( (field) => {
      if (form.get(field).invalid) {
        control = form.get(field);
        control.markAsDirty();
        control.markAsTouched();
        if (control instanceof FormGroup) {
          this.verifyForm(control);
        }
      }
      // console.log('==============');
      // console.log('field', field, form.get(field).invalid, form.get(field));
    });
    if(control) {
      let el = $('.ng-invalid:not(form):first');
      $('html,body').animate({scrollTop: (el.offset().top - 20)}, 'slow');
    }
  }
}
