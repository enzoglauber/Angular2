import { Injectable } from '@angular/core';
import * as _ from 'underscore';

import { Opportunity } from './opportunity.model';

@Injectable()
export class OpportunityService {
  constructor() { }
  data: Opportunity[] = [{ id:'1', name:'Rexam Beverage Can South America Sa', email:'email1@email.com' },
                      { id:'2', name:'Monsanto Do Brasil Ltda', email:'email2@email.com' },
                      { id:'3', name:'Epcos Do Brasil Ltda', email:'email1@email.com' },
                      { id:'4', name:'Syngenta Protecao De Cultivos Ltda', email:'email3@email.com' },
                      { id:'5', name:'Sta Maria Cia De Papel E Celulose', email:'email4@email.com' },
                      { id:'6', name:'Fabio Perini Ind Com De Maq Ltda', email:'email5@email.com' },
                      { id:'7', name:'Akzo Nobel Ltda', email:'email6@email.com' },
                      { id:'8', name:'Fabr De Artef De Latex Sao Roque Sa', email:'email7@email.com' },
                      { id:'9', name:'Signartec Coml Tec Ltda', email:'email8@email.com' },
                      { id:'10', name:'Oxiteno Nord Sa Ind Com', email:'email9@email.com' },
                      { id:'11', name:'Marisol Sa', email:'email10@email.com' }];
  //
  list () {
    return this.data;
  }
  save (entity?: Opportunity) {
    this.data.push(entity);
  }
  get (id: string) {
    let data = this.list();
    // 
    if (id) {
      return _.where(data, {id: id})[0];
    }
  }
}
