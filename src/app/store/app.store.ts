import { IPhotoObject } from '../interfaces/flickr.interface';

export const IMAGES_FEATURE_NODE = 'images';
export const BOOKMARKS_FEATURE_NODE = 'bookmarks';

export interface IImagesState {
    onLoading: boolean;
    images: IPhotoObject[];
    totalImagesCount: number;
    error: string | null;
}

export interface IBookmarksState {
    onLoading: boolean;
    bookmarks: IPhotoObject[];
    totalBookmarksCount: number;
    error: string | null;
}
