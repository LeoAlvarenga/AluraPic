import { NgModule } from "@angular/core";


import { PhotoFormModule } from "./photo-form/photo-form.module";
import { PhotoListModule } from "./photo-list/photo-list.module";
import { PhotoModule } from "./photo/photo.module";

@NgModule({
    declarations: [],
    imports: [
        PhotoFormModule,
        PhotoListModule,
        PhotoModule
    ]
})
export class PhotosModule {}