import { createAction, props } from '@ngrx/store';
import { IFlickrResponse } from '../../interfaces/flickr.interface';

export const getImagesAction = createAction('[IMAGES_GET_ALL]', props<{ name: string, pageSize: number, currentPage: number }>());
export const getImagesActionSuccess = createAction('[IMAGES_GET_ALL_SUCCESS]', props<{ res: IFlickrResponse }>());
export const getImagesActionFailure = createAction('[IMAGES_GET_ALL_FAILURE]', props<{ error: string }>());
