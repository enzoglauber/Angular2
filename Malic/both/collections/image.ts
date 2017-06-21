// import gm from 'gm';
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

		console.log('from \n\n ============================== \n\n', from);
		console.log('to \n\n ============================== \n\n', to);
		console.log('fileId \n\n ============================== \n\n', fileId);
		console.log('file \n\n ============================== \n\n', file);
		
		gm(from, file.name)
		.resize(32, 32)
		.gravity('Center')
		.extent(32, 32)
		.quality(75)
		.stream()
		.pipe(to);
	}
});