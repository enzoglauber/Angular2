import { Opportunity } from './../opportunity.model';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from "rxjs/Rx";
import { ActivatedRoute, Router } from "@angular/router";
import * as _ from 'underscore';

import { OpportunityService } from '../opportunity.service';

@Component({
  selector: 'app-opportunity-list',
  templateUrl: './opportunity-list.component.html',
  styleUrls: ['./opportunity-list.component.scss']
})
export class OpportunityListComponent implements OnInit {
  name: string;
  date: Date = new Date;
  filter: string;
  data: Array<any>;
  // 
  _route: Subscription;
  _data: Subscription;
  page: number;
  messageMapping: {[k: string]: string} = {'=0': 'No Opportunity.', '=1': 'One opportunity.', 'other': '# opportunitys.'};

  constructor (
    private router: Router,
    private $opportunity: OpportunityService,
    private route: ActivatedRoute
  ) {}
  save() {
    this.$opportunity.save();
  }
  next() {
    this.router.navigate(['/opportunity/list', ++this.page ]);
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
    this._route = this.route.params.subscribe((params: any) => {
      this.page = params['page'];
    });

    this._data = this.route.data.subscribe(
      (response: {data: Opportunity[]}) => {
        console.log(response);
        this.data = response.data;
      }
    );
  }
  ngOnDestroy() {
    this._route.unsubscribe();
    this._data.unsubscribe();
  }
}

