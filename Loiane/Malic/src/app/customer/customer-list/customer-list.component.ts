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
  constructor (private customer: CustomerService ) {
    this.data = this.customer.get();
    this.name = '123';
    console.log('_', _ );
  }
  new() {
    this.customer.new();
  }
  event(event: KeyboardEvent) {
    console.log('event', event);
  }
  ngOnInit() {
  }
}
