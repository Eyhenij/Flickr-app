import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IFlickrResponse } from '../../interfaces/flickr.interface';
import { Observable } from 'rxjs';

@Injectable()
export class FlickrService {

    private readonly _flickrUrl = 'https://www.flickr.com/services/rest/?method=flickr.photos.search';
    private readonly _apiKey = `api_key=${environment.flickr.key}`;

    constructor(private readonly _http: HttpClient) {}

    public findAll(name: string, pageSize: number, currentPage: number): Observable<IFlickrResponse> {
        return this._http.get<IFlickrResponse>(
            `${this._flickrUrl}&${this._apiKey}&text=${name}&format=json&nojsoncallback=1&per_page=${pageSize}&page=${currentPage}`
        );
    }

    public setResponseData(res: IFlickrResponse): void {
        localStorage.setItem('totalImagesCount', res.photos.total);
        localStorage.setItem('images', JSON.stringify(res.photos.photo));
    }
}
