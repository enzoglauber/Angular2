import { Parties } from '../../../both/collections/parties.collection';
import { Party } from '../../../both/models/party.model';

export function loadParties() {
	if (Parties.find().cursor.count() === 0) {
		for (var i = 0; i < 2; i++) {
			Parties.insert({
				name: Fake.sentence(50),
				description: Fake.sentence(100),
				location: {
					name: 'San Francisco'
				},
				public: true
			});
		}

		// const parties: Party[] = [{
		// 	name: 'Dubstep-Free Zone',
		// 	description: 'Can we please just for an evening not listen to dubstep.',
		// 	location: {
		// 		name: 'Palo Alto'
		// 	},
		// 	public: true
		// }, {
		// 	name: 'All dubstep all the time',
		// 	description: 'Get it on!',
		// 	location: {
		// 		name: 'Palo Alto'
		// 	},
		// 	public: true
		// }, {
		// 	name: 'Savage lounging',
		// 	description: 'Leisure suit required. And only fiercest manners.',
		// 	location: {
		// 		name: 'San Francisco'
		// 	},
		// 	public: false
		// }];
		// // 
		// parties.forEach((party: Party) => Parties.insert(party));
	}	
}

declare var Fake: {
    sentence(words: number): string;
}