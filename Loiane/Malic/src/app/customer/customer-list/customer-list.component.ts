import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../customer.service';
import * as _ from 'underscore';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})

export class CustomerListComponent implements OnInit {
  data: string[];
  name: string;
  filter: string;
  date: Date = new Date;
  messageMapping: {[k: string]: string} = {'=0': 'No Customer.', '=1': 'One customer.', 'other': '# customers.'};

  constructor (private _customer: CustomerService ) {
    this.data = this._customer.get();
    this.name = '123';
    console.log('_', _ );
  }
  new() {
    this._customer.new();
  }

  get(){
    if (this.data.length === 0 || this.filter === undefined
    || this.filter.trim() === ''){
      return this.data;
    }
    return this.data.filter(
       v => v.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase())
    );
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('VALOR ASYNC'), 2000)  
  })

  valorAsync2 = Observable.interval(2000).map(valor => 'Valor async 2');

  event(event: KeyboardEvent) {
    console.log('event', event);
  }
  ngOnInit() {
  }
}
