import { Pipe, PipeTransform } from '@angular/core';
import { Image } from '../../../../../both/collections/image';
import { Party } from '../../../../../both/models/party.model';

@Pipe({
	name: 'image'
})
export class ImagePipe implements PipeTransform {
	transform( entity: any ) {
		if (!entity) {
			return;
		}
		
		let imageUrl: string;
		let imageId: string = (entity.images || [])[0];
		
		const found = Image.findOne(imageId);
		
		if (found) {
			imageUrl = found.url;
		}
		
		console.log('image', found);
		return imageUrl;
	}
}