import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IImagesState, IMAGES_FEATURE_NODE } from '../app.store';
import { IPhotoObject } from '../../interfaces/flickr.interface';

const _imagesFeatureSelector = createFeatureSelector<IImagesState>(IMAGES_FEATURE_NODE);

export const getImagesSelector = createSelector(
    _imagesFeatureSelector,
    (state: IImagesState): IPhotoObject[] => state.images
);

export const getTotalImagesCountSelector = createSelector(
    _imagesFeatureSelector,
    (state: IImagesState): number => state.totalImagesCount
);
