import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BOOKMARKS_FEATURE_NODE, IBookmarksState } from '../app.store';
import { IPhotoObject } from '../../interfaces/flickr.interface';

const _bookmarksFeatureSelector = createFeatureSelector<IBookmarksState>(BOOKMARKS_FEATURE_NODE);

export const getBookmarksSelector = createSelector(
    _bookmarksFeatureSelector,
    (state: IBookmarksState): IPhotoObject[] => state.bookmarks
);
