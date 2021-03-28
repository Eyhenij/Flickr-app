import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IFlickrPhoto, IFlickrResponse } from '../../interfaces/flickr.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FlickrService {

    private readonly _flickrUrl = 'https://www.flickr.com/services/rest/?method=flickr.photos.search';
    private readonly _apiKey = `api_key=${environment.flickr.key}`;

    constructor(private readonly _http: HttpClient) {}

    public findAll(name: string, pageSize: number, currentPage: number): Observable<IFlickrPhoto[]> {
        return this._http.get<IFlickrResponse>(
            `${this._flickrUrl}&${this._apiKey}&text=${name}&format=json&nojsoncallback=1&per_page=${pageSize}&page=${currentPage}`
        ).pipe(
            map((res: IFlickrResponse): IFlickrPhoto[] => res.photos.photo)
        );
    }
}
