import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../customer.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})

export class CustomerListComponent implements OnInit {
  data: string[];
  name: string;
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
  event(event: KeyboardEvent) {
    console.log('event', event);
  }
  ngOnInit() {
  }
}
