import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { CustomerService } from '../customer.service';
import { FormCanDeactivate } from './../../guards/form-caneactivate';

@Component({
  selector: 'app-customer-save',
  templateUrl: './customer-save.component.html',
  styleUrls: ['./customer-save.component.scss']
})
export class CustomerSaveComponent implements OnInit, OnDestroy, FormCanDeactivate {
  id: string;
  customer: any;
  _route: Subscription;
  private isChange: boolean;

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
  
  onInput() {
    this.isChange = true;
    console.log('onInput', this.customer);
  }
  
  formIsChange() {
    if (this.isChange) {
      confirm("Tem certeza que deseja sari dessa pagina?");
    }
    return true;
  }

  deactivate() {
    return this.formIsChange();
  }
}
