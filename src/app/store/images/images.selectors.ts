import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IImagesState, IMAGES_FEATURE_NODE } from './app.store';
import { IFlickrPhoto } from '../../interfaces/flickr.interface';

const _imagesFeatureSelector = createFeatureSelector<IImagesState>(IMAGES_FEATURE_NODE);

export const getImagesSelector = createSelector<IImagesState, IImagesState, IFlickrPhoto[]>(
    _imagesFeatureSelector,
    (state: IImagesState): IFlickrPhoto[] => state.images
);

export const getTotalImagesCountSelector = createSelector<IImagesState, IImagesState, number>(
    _imagesFeatureSelector,
    (state: IImagesState): number => state.totalImagesCount
);

export const getOnLoadingSelector = createSelector<IImagesState, IImagesState, boolean>(
    _imagesFeatureSelector,
    (state: IImagesState): boolean => state.onLoading
);
