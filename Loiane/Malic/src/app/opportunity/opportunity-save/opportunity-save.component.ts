import { StatesModel } from './../../shared/models/states';
import { Http } from '@angular/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';

import { Opportunity } from './../opportunity.model';
import { CoreService } from './../../shared/services/core.service';
import { OpportunityService } from '../opportunity.service';
import { StatesService } from '../../shared/services/states.service';

@Component({
  selector: 'app-opportunity-save',
  templateUrl: './opportunity-save.component.html',
  styleUrls: ['./opportunity-save.component.scss']
})
export class OpportunitySaveComponent implements OnInit, OnDestroy {
  form: FormGroup;
  states: StatesModel[];
  _route: Subscription;
  _entity: Subscription;
  private isChange: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private $core: CoreService,
    private $state: StatesService,
    private $opportunity: OpportunityService,
    private http: Http,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {

    this.$state.get().subscribe(data => this.states = data);
    //
    this.form = this.formBuilder.group({
      name:['Enzo Glauber', Validators.required],
      email:[null, [Validators.required, Validators.email] ],
      address: this.formBuilder.group({
        zip: [],
        street: [],
        number: [],
        complement: [],
        state: [],
        city: [],
        neighborhood: []
      })
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.http.post('enderecoserver/formusuario', JSON.stringify(this.form.value) )
        .map(response => response)
        .subscribe(response => {
          this.reset();
          console.log(response);
        }, (error: any) => {
          console.log('error', error);
          this.reset();
        });
    } else {
      this.$core.verifyForm(this.form);
    }
  }

  valid(field: string) {
    return !this.form.get(field).valid && (this.form.get(field).touched);
  }

  reset() {
    this.form.reset();
  }
  ngOnDestroy() {
    // this._entity.unsubscribe();
  }

  onInput() {
    this.isChange = true;
  }

  getAddress() {
    var zip = this.form.get('address.zip').value.replace(/\D/g, '');
    var valid = /^[0-9]{8}$/;
    if ( valid.test(zip) ) {
      this.resetAddress();
      //
      this.http.get(`//viacep.com.br/ws/${zip}/json`)
        .map( address => address.json() )
        .subscribe( (address) => this.setAddress(address) );
    }
  }

  setAddress (address) {
    this.form.patchValue({
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

  resetAddress () {
    this.form.patchValue({
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

