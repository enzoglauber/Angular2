import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { Ng2PaginationModule } from 'ng2-pagination'
import { AgmCoreModule } from 'angular2-google-maps/core';
import { FileDropModule } from "angular2-file-drop";

import { AppComponent  } from './app.component';
import { routes, ROUTES_PROVIDERS } from './app.routes';
import { PARTIES_DECLARATIONS } from './parties';
import { SHARED_DECLARATIONS } from './shared';
import { AUTH_DECLARATIONS } from "./auth/index";

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
    	ReactiveFormsModule,
	    RouterModule.forRoot(routes),
	    AccountsModule,
		Ng2PaginationModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyAWoBdZHCNh5R-hB5S5ZZ2oeoYyfdDgniA'
		}),
		FileDropModule
	],
	declarations: [
		AppComponent,
    	...PARTIES_DECLARATIONS,
    	...SHARED_DECLARATIONS,
    	...AUTH_DECLARATIONS
	],
	providers: [
		...ROUTES_PROVIDERS
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
