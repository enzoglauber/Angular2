import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import * as _ from 'underscore';

import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})

export class CustomerListComponent implements OnInit {
  name: string;
  date: Date = new Date;
  filter: string;
  data: Array<any>;
  // 
  _route: Subscription;
  page: number;
  messageMapping: {[k: string]: string} = {'=0': 'No Customer.', '=1': 'One customer.', 'other': '# customers.'};

  constructor (
    private router: Router,
    private _customer: CustomerService,
    private activatedRoute: ActivatedRoute
  ) {
    this.data = this._customer.list();
    this.name = '123';
  }
  new() {
    this._customer.new();
  }
  next() {
    this.router.navigate(['/customer', ++this.page ]);
  }
  list(){
    if (this.data.length === 0 || this.filter === undefined
    || this.filter.trim() === ''){
      return this.data;
    }
    return this.data.filter(
      v => v.name.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase())
    );
  }

  ngOnInit() {
    this._route = this.activatedRoute.params.subscribe((params: any) => {
      this.page = params['page'];
    })
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('VALOR ASYNC'), 2000)
  })

  valorAsync2 = Observable.interval(2000).map(valor => 'Valor async 2');

  event(event: KeyboardEvent) {
    // console.log('event', event);
  }
 
}
