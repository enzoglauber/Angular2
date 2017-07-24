import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {
  constructor() { }
  // 
  get () {
    return ["BASF", "NESTLE", "Petrobras"];
  }
}
