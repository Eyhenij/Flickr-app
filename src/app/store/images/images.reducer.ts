import { createReducer, on } from '@ngrx/store';
import { IImagesState } from './app.store';
import * as imagesActions from './images.actions';

const initialState: IImagesState = {
    onLoading: false,
    images: [],
    totalImagesCount: 0,
    selectedImage: null,
    error: null
};

export const imagesReducer = createReducer(
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
                images: [...res.photos.photo],
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
