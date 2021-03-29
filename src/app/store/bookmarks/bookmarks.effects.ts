import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, tap } from 'rxjs/operators';
import * as bookmarksActions from './bookmarks.actions';
import { BookmarksService } from '../services/bookmarks.service';

@Injectable()
export class BookmarksEffects {

    createBookmark$ = createEffect((): Observable<Action> => this._actions
        .pipe(
            ofType(bookmarksActions.createBookmarkAction),
            tap(({ newBookmark }): void => this._bookmarksService.setNewBookmarkData(newBookmark)),
            map((): Action => bookmarksActions.createBookmarkActionSuccess()),
            catchError((err: Error): Observable<Action> => of(
                bookmarksActions.createBookmarkActionFailure({ error: err.message }))
            )
        )
    );

    removeBookmark$ = createEffect((): Observable<Action> => this._actions
        .pipe(
            ofType(bookmarksActions.removeBookmarkAction),
            tap(({ id }): void => this._bookmarksService.removeBookmarkData(id)),
            map((): Action => bookmarksActions.removeBookmarkActionSuccess()),
            catchError((err: Error): Observable<Action> => of(
                bookmarksActions.removeBookmarkActionFailure({ error: err.message }))
            )
        )
    );

    constructor(
        private _actions: Actions,
        private _bookmarksService: BookmarksService
    ) {}
}
