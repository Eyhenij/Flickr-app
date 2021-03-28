export interface IFlickrPhoto {
    farm: string;
    id: string;
    isfamily: number;
    isfriend: number;
    ispublic: number;
    owner: string;
    secret: string;
    server: string;
    title: string;
}

export interface IFlickrResponse {
    photos: {
        page: number;
        pages: number;
        perpage: number;
        photo: IFlickrPhoto[];
        total: string;
    };
    stat: string;
}
