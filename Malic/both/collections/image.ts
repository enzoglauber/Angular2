import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';
import { UploadFS } from 'meteor/jalik:ufs';
import { ThumbI, ImageI } from "../models/image";
 
export const Image = new MongoObservable.Collection<ImageI>('image');
export const Thumb = new MongoObservable.Collection<ThumbI>('thumb');

function loggedIn(userId) {
	return !!userId;
}

export const ThumbStore = new UploadFS.store.GridFS({
	collection: Thumb.collection,
	name: 'thumb',
	permissions: new UploadFS.StorePermissions({
		insert: loggedIn,
		update: loggedIn,
		remove: loggedIn
	})
});

export const ImageStore = new UploadFS.store.GridFS({
	collection: Image.collection,
	name: 'image',
	filter: new UploadFS.Filter({
		contentTypes: ['image/*']
	}),
	copyTo: [
		ThumbStore
	],
	permissions: new UploadFS.StorePermissions({
		insert: loggedIn,
		update: loggedIn,
		remove: loggedIn
	})
	, transformWrite(from, to, fileId, file) {
		// Resize to 32x32
		const gm = require('gm');

		gm(from, file.name)
		.resize(32, 32)
		.gravity('Center')
		.extent(32, 32)
		.quality(75)
		.stream()
		.pipe(to);
	}
});