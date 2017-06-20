import { Meteor } from 'meteor/meteor';
import { Thumb, Image } from '../../../both/collections/image';

Meteor.publish('thumb', function(ids: string[]) {
	return Thumb.collection.find({
		originalStore: 'image',
		originalId: {
			$in: ids
		}
	});
});

Meteor.publish('image', function() {
	return Image.collection.find({});
});