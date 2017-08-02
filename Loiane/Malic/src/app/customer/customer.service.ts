import { Injectable } from '@angular/core';
import * as _ from 'underscore';

@Injectable()
export class CustomerService {
  constructor() { }
  //
  list () {
    return [{ id:'1',name:'Rexam Beverage Can South America Sa' },
            { id:'2',name:'Monsanto Do Brasil Ltda' },
            { id:'3',name:'Epcos Do Brasil Ltda' },
            { id:'4',name:'Syngenta Protecao De Cultivos Ltda' },
            { id:'5',name:'Sta Maria Cia De Papel E Celulose' },
            { id:'6',name:'Fabio Perini Ind Com De Maq Ltda' },
            { id:'7',name:'Akzo Nobel Ltda' },
            { id:'8',name:'Fabr De Artef De Latex Sao Roque Sa' },
            { id:'9',name:'Signartec Coml Tec Ltda' },
            { id:'10',name:'Oxiteno Nord Sa Ind Com' },
            { id:'11',name:'Marisol Sa' }];
  }
  new () {
    console.log('new porra');
  }
  get (id:any) {
    let data = this.list();
    return _.where(data, {id:id})[0];
  }
}
