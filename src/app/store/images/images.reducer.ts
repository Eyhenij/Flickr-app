import { Action, createReducer, on } from '@ngrx/store';
import { IImagesState } from '../app.store';
import * as imagesActions from './images.actions';
import { IFlickrPhoto, IPhotoObject } from '../../interfaces/flickr.interface';

const initialState: IImagesState = {
    onLoading: false,
    images: [],
    totalImagesCount: 0,
    error: null
};

const _imagesReducer = createReducer(
    initialState,
    on(imagesActions.getImagesAction,
        (state: IImagesState) => ({
            ...state,
            onLoading: true
        })
    ),
    on(imagesActions.getImagesActionSuccess,
        (state: IImagesState, { res }) => {
            return {
                ...state,
                images: [...res.photos.photo.map((photo: IFlickrPhoto): IPhotoObject => {
                    return {
                        photoUrl: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
                        id: photo.id,
                        title: photo.title
                    };
                })],
                totalImagesCount: Number(res.photos.total),
                onLoading: false
            };
        }
    ),
    on(imagesActions.getImagesActionFailure,
        (state: IImagesState, { error }) => ({
            ...state,
            onLoading: false,
            error
        })
    )
);

export const imagesReducer = (state: IImagesState, action: Action) => {
    return _imagesReducer(state, action);
};
