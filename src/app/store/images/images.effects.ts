import { FlickrService } from '../services/flickr-service.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as imagesActions from './images.actions';
import { IFlickrResponse } from '../../interfaces/flickr.interface';

@Injectable()
export class ImagesEffects {

    searchImages$ = createEffect((): Observable<Action> => this._actions
        .pipe(
            ofType(imagesActions.getImagesAction),
            switchMap(({ name, pageSize, currentPage }): Observable<IFlickrResponse> => {
                return this._flickrService.find(name, pageSize, currentPage);
            }),
            map((res: IFlickrResponse): Action => imagesActions.getImagesActionSuccess({ res })),
            catchError((err: Error): Observable<Action> => of(
                imagesActions.getImagesActionFailure({ error: err.message }))
            )
        )
    );

    constructor(
        private _actions: Actions,
        private _flickrService: FlickrService
    ) {}
}
