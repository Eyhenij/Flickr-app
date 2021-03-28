import { createAction, props } from '@ngrx/store';

export const getImagesAction = createAction('[IMAGES_GET_ALL]', props<{name: string, pageSize: number, currentPage: number}>());
export const getImagesActionSuccess = createAction('[IMAGES_GET_ALL_SUCCESS]');
export const getImagesActionFailure = createAction('[IMAGES_GET_ALL_FAILURE]');
