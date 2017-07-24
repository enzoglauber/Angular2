import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  data: string[];
  name: string = "abc";
  
  constructor (private customer: CustomerService ) { 
    console.log('anal', customer);
    this.data = this.customer.get();

    // var customer = new CustomerService();
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
