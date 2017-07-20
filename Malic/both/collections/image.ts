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
});