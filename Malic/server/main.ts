import { Meteor } from 'meteor/meteor';
import { loadParties } from './imports/fixtures/parties';
import './imports/publications/parties';
import './imports/publications/users';
import './imports/publications/image';
import '../both/methods/parties.methods';

Meteor.startup(() => {
	loadParties();
});