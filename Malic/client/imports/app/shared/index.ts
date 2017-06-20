import { DisplayNamePipe } from './display-name.pipe';
import { RsvpPipe } from "./rsvp.pipe";
import { UploadComponent } from "./upload";
import { ImagePipe } from "./pipes/image";

export const SHARED_DECLARATIONS: any[] = [
    DisplayNamePipe, 
    RsvpPipe,
    UploadComponent,
    ImagePipe
];