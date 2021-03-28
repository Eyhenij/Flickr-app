import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FlickrService } from '../../store/services/flickr-service.service';
import { IFlickrPhoto } from '../../interfaces/flickr.interface';
import { SubscriptionLike } from 'rxjs';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent implements OnInit {

    public isEmptySearch = true;
    public photos: IFlickrPhoto[];
    public searchControl: FormControl;

    private _searchString: string;
    private _pageSize = 10;
    private _currentPage = 1;
    private _subscription: SubscriptionLike;

    constructor(private readonly _flickrService: FlickrService) {}

    ngOnInit(): void {
        this.searchControl = new FormControl(
            this._searchString
        );
    }

    public onSearch(): void {
        this._searchString = this.searchControl.value.toLowerCase();
        this.findPhotos(this._searchString);
    }

    public findPhotos(name: string): void {
        this._subscription = this._flickrService.findAll(name, this._pageSize, this._currentPage)
            .subscribe((res: IFlickrPhoto[]): void => {
                this.photos = res;
                console.log(this.photos);
                this._subscription.unsubscribe();
            });
    }
}
