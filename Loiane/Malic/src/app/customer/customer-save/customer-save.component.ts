import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { Customer } from './../customer.model';
import { CustomerService } from '../customer.service';
import { FormCanDeactivate } from './../../guards/form-caneactivate';

@Component({
  selector: 'app-customer-save',
  templateUrl: './customer-save.component.html',
  styleUrls: ['./customer-save.component.scss']
})
export class CustomerSaveComponent implements OnInit, OnDestroy, FormCanDeactivate {
  entity: Customer;
  _route: Subscription;
  _entity: Subscription;
  private isChange: boolean;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private $customer: CustomerService
  ) {}

  ngOnInit() {
    this.entity = {id:null, name: null, email: null};
    this._entity = this.route.data.subscribe(
      (resolve: { entity: Customer }) => {
        if (resolve) {
          this.entity = resolve.entity;
        } else {
        }
        console.log('resolve', resolve, this.entity);
      }
    );
  }

  ngOnDestroy() {
    this._entity.unsubscribe();
  }
  
  save(form) {
    console.log('form', form);
    console.log('cusinho', this.entity);
  }
  
  onInput() {
    this.isChange = true;
    console.log('onInput', this.entity);
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
