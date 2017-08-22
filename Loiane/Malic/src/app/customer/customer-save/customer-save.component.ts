import { Http } from '@angular/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import 'rxjs/add/operator/map';

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
    private $customer: CustomerService,
    private http: Http

  ) {}
  
  ngOnInit() {
    this._entity = this.route.data.subscribe(
      (resolve: { entity: Customer }) => {
        if (resolve.entity) {
          this.entity = resolve.entity;
        } else {
          this.entity = {id:null, name:null, email:null};
        }
        console.log('resolve', resolve, this.entity);
      }
    );
  }

  ngOnDestroy() {
    this._entity.unsubscribe();
  }
  
  save(form) {
    // console.log('form', form);
    // console.log('cusinho', this.entity);
    this.http.post('enderecoserver/formusuario', this._entity)
    .map(response => response)
    .subscribe(response => console.log(response));
  }
  
  onInput() {
    this.isChange = true;
    // console.log('onInput', this.entity);
  }
  
  getAddress(zip, form) {
    zip = zip.replace(/\D/g, '');
    var valid = /^[0-9]{8}$/;
    if ( valid.test(zip) ) {
      this.resetAddress(form);
      // 
      this.http.get(`//viacep.com.br/ws/${zip}/json`)
        .map( address => address.json() )
        .subscribe( (address) => this.setAddress(address, form) );
    }
  }
  
  setAddress (address, ngForm) {
    ngForm.form.patchValue({
      address: {
        street: address.logradouro,
        zip: address.cep,
        complement: address.complemento,
        state: address.uf,
        city: address.localidade,
        neighborhood: address.bairro,
      }
    })
  }

  resetAddress (ngForm) {
    ngForm.form.patchValue({
      address: {
        street: null,
        zip: null,
        complement: null,
        state: null,
        city: null,
        neighborhood: null
      }
    })
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
