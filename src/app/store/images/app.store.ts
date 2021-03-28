import { IFlickrPhoto } from '../../interfaces/flickr.interface';

export const IMAGES_FEATURE_NODE = 'images';

export interface IImagesState {
    onLoading: boolean;
    images: IFlickrPhoto[];
    totalImagesCount: number;
    selectedImage: IFlickrPhoto | null;
    error: string | null;
}
