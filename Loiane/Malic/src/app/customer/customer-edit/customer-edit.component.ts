import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit, OnDestroy {
  id: string;
  page: string;
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
      this.page = params['page'];
      // 
      this.customer = this._customer.get(this.id);
      if (!this.customer) {
        this.router.navigate['/']; 
      }
    })
  }

  ngOnDestroy() {
    this._route.unsubscribe();
  }
}
