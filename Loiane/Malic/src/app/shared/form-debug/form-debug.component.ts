import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Resolve } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.scss']
})
export class FormDebugComponent implements OnInit, OnDestroy {
  @Input() form;
  _changes: Subscription;
  constructor() { }

  ngOnInit() {
    console.log('form-debug: ', this.form);
    this._changes = this.form.valueChanges.subscribe(() => {
    })
  }
  
  ngOnDestroy() {
    if (this._changes) {
      this._changes.unsubscribe();
    }
  }
  
}

