import { createAction, props } from '@ngrx/store';
import { IPhotoObject } from '../../interfaces/flickr.interface';

export const createBookmarkAction = createAction('[BOOKMARKS_CREATE]', props<{ newBookmark: IPhotoObject, tags: string }>());
export const createBookmarkActionSuccess = createAction('[BOOKMARKS_CREATE_SUCCESS]');
export const createBookmarkActionFailure = createAction('[BOOKMARKS_CREATE_FAILURE]', props<{ error: string }>());

export const removeBookmarkAction = createAction('[BOOKMARKS_REMOVE]', props<{ id: string }>());
export const removeBookmarkActionSuccess = createAction('[BOOKMARKS_REMOVE_SUCCESS]');
export const removeBookmarkActionFailure = createAction('[BOOKMARKS_REMOVE_FAILURE]', props<{ error: string }>());
