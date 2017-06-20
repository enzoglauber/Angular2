import { Meteor } from 'meteor/meteor';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Parties } from '/both/collections/parties.collection.ts';
import template from './parties-form.component.html';

@Component({
	selector: 'parties-form',
	template
})

@InjectUser('user')
export class PartiesFormComponent implements OnInit {
	addForm: FormGroup;
	newPartyPosition: {lat:number, lng: number} = {lat: 37.4292, lng: -122.1381};
	images: string[] = [];

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
	
	mapClicked($event) {
		this.newPartyPosition = $event.coords;
	}

	addParty(): void {
		if (!Meteor.userId()) {
			alert('Please log in to add a party');
			return;
		}

		if (this.addForm.valid) {
			Parties.insert({
				name: this.addForm.value.name,
				description: this.addForm.value.description,
				location: {
					name: this.addForm.value.location,
					lat: this.newPartyPosition.lat,
					lng: this.newPartyPosition.lng
				},
				images: this.images,
				public: this.addForm.value.public,
				owner: Meteor.userId()
			});
			// 
			this.addForm.reset();
		}
	}

	onImage(imageId: string) {
		this.images.push(imageId);
	}
}
