import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Parties } from '../../../both/collections/parties.collection';
import { Party } from '../../../both/models/party.model';

import template from './app.component.html';
import {InjectUser} from "angular2-meteor-accounts-ui";
//
@InjectUser('user')
@Component({
	selector: 'app',
	template
})
export class AppComponent {
	constructor () {}
	
	logout() {
		Meteor.logout();
	}
}