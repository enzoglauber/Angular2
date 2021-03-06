import 'zone.js';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Meteor } from 'meteor/meteor';
import { AppModule } from './imports/app/app.module';
import '../both/methods/parties.methods'
 
Meteor.startup(() => {
	platformBrowserDynamic().bootstrapModule(AppModule);
});