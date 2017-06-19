import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { PartiesListComponent } from './parties/parties-list.component';
import { PartyDetailsComponent } from './parties/party-details.component';
import { LoginComponent } from "./auth/login";
import { SignupComponent } from "./auth/signup";
import { RecoverComponent } from "./auth/recover";


export const routes: Route[] = [
	{ path: '', component: PartiesListComponent },
	{ path: 'party/:partyId', component: PartyDetailsComponent, canActivate: ['canActivateForLoggedIn'] },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent }
	{ path: 'recover', component: RecoverComponent }
];

export const ROUTES_PROVIDERS = [{
	provide: 'canActivateForLoggedIn',
	useValue: () => !! Meteor.userId()
}];
