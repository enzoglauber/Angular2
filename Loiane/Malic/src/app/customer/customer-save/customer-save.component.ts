import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-save',
  templateUrl: './customer-save.component.html',
  styleUrls: ['./customer-save.component.scss']
})
export class CustomerSaveComponent implements OnInit, OnDestroy {
  id: string;
  customer: any;
  _route: Subscription;

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _customer: CustomerService
  ) {
    // this.id = this.route.snapshot.params.id;
    // console.log(this.route);
  }
  ngOnInit() {
    this._route = this.activatedRoute.params.subscribe((params: any) => {
      this.id = params['id'];
      //
      this.customer = this._customer.get(this.id);
    })
  }
  ngOnDestroy() {
    this._route.unsubscribe();
  }

  saveCustomer() {
    console.log('cusinho', this.customer);
    
  }
}