import { Meteor } from 'meteor/meteor';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Parties } from '/both/collections/parties.collection.ts';
import template from './parties-form.component.html';

@Component({
	selector: 'parties-form',
	template
})

// @InjectUser('user')
export class PartiesFormComponent implements OnInit {
	addForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder
	) {}

	ngOnInit() {
		console.log(this);

		this.addForm = this.formBuilder.group({
			name: ['', Validators.required],
			description: [], 
			location: ['', Validators.required],
			public: [false]
		});
	}

	addParty(): void {
		if (!Meteor.userId()) {
			alert('Please log in to add a party');
			return;
		}

		if (this.addForm.valid) {
			Parties.insert(Object.assign({}, this.addForm.value, { owner: Meteor.userId() }));
			this.addForm.reset();
		}
	}
}
