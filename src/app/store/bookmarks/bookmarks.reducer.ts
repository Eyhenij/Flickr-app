import { Action, createReducer, on } from '@ngrx/store';
import { IBookmarksState } from '../app.store';
import * as bookmarksActions from './bookmarks.actions';
import { IPhotoObject } from '../../interfaces/flickr.interface';

const initialState: IBookmarksState = {
    onLoading: false,
    bookmarks: JSON.parse(localStorage.getItem('bookmarks') as string),
    totalBookmarksCount: 0,
    error: null
};

const _bookmarksReducer = createReducer(
    initialState,
// ===================  CREATE BOOKMARK  ===================
    on(bookmarksActions.createBookmarkAction,
        (state: IBookmarksState, { newBookmark, tags }) => ({
            ...state,
            bookmarks: [...state.bookmarks, { ...newBookmark, tags: tags.split('') }],
            totalBookmarksCount: state.bookmarks.length,
            onLoading: true
        })
    ),
    on(bookmarksActions.createBookmarkActionSuccess,
        (state: IBookmarksState) => ({
            ...state,
            onLoading: false
        })
    ),
    on(bookmarksActions.createBookmarkActionFailure,
        (state: IBookmarksState, { error }) => ({
            ...state,
            onLoading: false,
            error
        })
    ),

// ===================  REMOVE BOOKMARK  ===================
    on(bookmarksActions.removeBookmarkAction,
        (state: IBookmarksState, { id }) => ({
            ...state,
            bookmarks: [...state.bookmarks.filter((el: IPhotoObject): boolean => el.id !== id)],
            totalBookmarksCount: state.bookmarks.length,
            onLoading: true
        })
    ),
    on(bookmarksActions.removeBookmarkActionSuccess,
        (state: IBookmarksState) => ({
            ...state,
            onLoading: false
        })
    ),
    on(bookmarksActions.removeBookmarkActionFailure,
        (state: IBookmarksState, { error }) => ({
            ...state,
            onLoading: false,
            error
        })
    )
);

export const bookmarksReducer = (state: IBookmarksState, action: Action) => {
    return _bookmarksReducer(state, action);
};
