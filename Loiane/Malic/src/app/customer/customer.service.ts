import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {
  constructor() { }
  //
  get () {
    return ['BASF LTDA', 'NESTLE do GRupo Pão de acuçar', 'Petrobras do brasil'];
  }
  new () {
    console.log('new porra');
  }
}
