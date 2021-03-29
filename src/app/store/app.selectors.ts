import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BOOKMARKS_FEATURE_NODE, IBookmarksState, IImagesState, IMAGES_FEATURE_NODE } from './app.store';

const _imagesFeatureSelector = createFeatureSelector<IImagesState>(IMAGES_FEATURE_NODE);
const _bookmarksFeatureSelector = createFeatureSelector<IBookmarksState>(BOOKMARKS_FEATURE_NODE);

export const getOnLoadingValueSelector = createSelector(
    _imagesFeatureSelector,
    _bookmarksFeatureSelector,
    (imagesState: IImagesState, bookmarksState: IBookmarksState): boolean => {
        return imagesState.onLoading || bookmarksState.onLoading;
    }
);
