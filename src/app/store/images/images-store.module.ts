import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlickrService } from '../services/flickr-service.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { IMAGES_FEATURE_NODE } from '../app.store';
import { imagesReducer } from './images.reducer';
import { ImagesEffects } from './images.effects';


@NgModule({
    providers: [FlickrService],
    imports: [
        CommonModule,
        StoreModule.forFeature(IMAGES_FEATURE_NODE, imagesReducer),
        EffectsModule.forFeature([ImagesEffects])
    ]
})
export class ImagesStoreModule {}
