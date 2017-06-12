import { Parties } from '../../../both/collections/parties.collection';
import { Party } from '../../../both/models/party.model';

export function loadParties() {
	if (Parties.find().cursor.count() === 0) {
		for (var i = 0; i < 15000; i++) {
			Parties.insert({
				name: Fake.sentence(50),
				location: Fake.sentence(10),
				description: Fake.sentence(100),
				public: true
			});
		}
	}	
}

declare var Fake: {
    sentence(words: number): string;
}