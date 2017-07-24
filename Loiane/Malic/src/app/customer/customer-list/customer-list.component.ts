import { CustomerService } from '../customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  data: string[];
  constructor (private customer: CustomerService ) { 
    console.log('anal', customer);
    this.data = this.customer.get();

    // var customer = new CustomerService();
  }

  ngOnInit() {
  }

}
