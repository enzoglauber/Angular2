import { Http } from '@angular/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';

import { Opportunity } from './../opportunity.model';
import { OpportunityService } from '../opportunity.service';

@Component({
  selector: 'app-opportunity-save',
  templateUrl: './opportunity-save.component.html',
  styleUrls: ['./opportunity-save.component.scss']
})
export class OpportunitySaveComponent implements OnInit, OnDestroy {
  form: FormGroup;
  entity: Opportunity;
  _route: Subscription;
  _entity: Subscription;
  private isChange: boolean;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private $opportunity: OpportunityService,
    private http: Http,
    private formBuilder: FormBuilder
  ) {}
  
  ngOnInit() {
    // this._entity = this.route.data.subscribe(
    //   (resolve: { entity: Opportunity }) => {
    //     if (resolve.entity) {
    //       this.entity = resolve.entity;
    //     } else {
    //       this.entity = {id:null, name:null, email:null};
    //     }
    //     console.log('resolve', resolve, this.entity);
    //   }
    // );
    // this.form = new FormGroup({
    //   name: new FormControl('Enzo'),
    //   email: new FormControl('Enzo')
    // });

    this.form = this.formBuilder.group({
      name:['Enzo Glauber', Validators.required],
      email:[null, [Validators.required, Validators.email] ],
    });
  }

  onSubmit() {
    console.log('FORM', this.form);
    this.http.post('enderecoserver/formusuario', JSON.stringify(this.form.value) )
      .map(response => response)
      .subscribe(response => {
        // form reset
        this.reset();
        
        console.log(response);
      }, (error: any) => {
        console.log('error', error);
        this.reset();
      });
  }
  valid(field) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }
  reset() {
    this.form.reset();
  }
  ngOnDestroy() {
    this._entity.unsubscribe();
  }
  
  onInput() {
    this.isChange = true;
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
}

