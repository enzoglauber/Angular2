import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MeteorObservable } from "meteor-rxjs";
import { Subject, Subscription, Observable } from "rxjs";

import { upload } from '../../../../both/methods/image';
import { ThumbI } from "../../../../both/models/image";
import { Thumb } from "../../../../both/collections/image";

import template from './upload.html';
import style from './upload.scss';

@Component({
	selector: 'upload',
	template, 
	styles: [ style ]
})

export class UploadComponent implements OnInit {
	fileIsOver: boolean = false;
	uploading: boolean = false;
	filesArray: string[] = [];
	files: Subject<string[]> = new Subject<string[]>();
	thumbsSubscription: Subscription;
	thumbs: Observable<ThumbI[]>;
	@Output() onFile: EventEmitter<string> = new EventEmitter<string>();

	constructor() {}

	ngOnInit() {
		this.files.subscribe((filesArray) => {
			MeteorObservable.autorun().subscribe(() => {
				if (this.thumbsSubscription) {
					this.thumbsSubscription.unsubscribe();
					this.thumbsSubscription = undefined;
				}

				this.thumbsSubscription = MeteorObservable.subscribe("thumb", filesArray).subscribe(() => {
					this.thumbs = Thumb.find({
						originalStore: 'image',
						originalId: {
							$in: filesArray
						}
					}).zone();
				});
			});
		});
	}

	fileOver(fileIsOver: boolean): void {
		this.fileIsOver = fileIsOver;
	}

	onFileDrop(file: File): void {
		this.uploading = true;

		upload(file)
		.then((result) => {
			this.uploading = false;
			this.addFile(result);
		})
		.catch((error) => {
			this.uploading = false;
			console.log(`Something went wrong!`, error);
		});
	}

	addFile(file) {
		this.filesArray.push(file._id);
		this.files.next(this.filesArray);
		this.onFile.emit(file._id);
	}
	
	reset() {
		this.filesArray = [];
		this.files.next(this.filesArray);
	}
}