import { Meteor } from 'meteor/meteor';
import { Parties } from '../../../both/collections/parties.collection';
import { Counts } from 'meteor/tmeasday:publish-counts';

interface Options {
	[key: string]: any;
}

Meteor.publish('parties', function(options: Options, location?: string) {
	const selector = buildQuery.call(this, null, location);
	
	Counts.publish(this, 'party.pg', Parties.collection.find(selector), { noReady: true });
	
	return Parties.find(selector, options);
});

Meteor.publish('party', function(partyId: string) {
	return Parties.find(buildQuery.call(this, partyId));
});

function buildQuery(partyId?: string, location?: string): Object {
	const isAvailable = {
		$or: [{
			// party is public
			public: true
		},
		// or
		{ 
			// current user is the owner
			$and: [{
				owner: this.userId 
			}, {
				owner: {
					$exists: true
				}
			}]
		},
		{
			$and: [
				{ invited: this.userId },
				{ invited: { $exists: true } }
			]
		}]
	};
	
	if (partyId) {
		return {
			// only single party
			$and: [{
				_id: partyId
			},
			isAvailable
			]
		};
	}
	
	const searchRegEx = { '$regex': '.*' + (location || '') + '.*', '$options': 'i' };
	
	return {
		$and: [{
			'location.name': searchRegEx
		},
		isAvailable
		]
	};
}