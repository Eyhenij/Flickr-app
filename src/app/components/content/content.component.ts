import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FlickrService } from '../../store/services/flickr-service.service';
import { IFlickrPhoto } from '../../interfaces/flickr.interface';
import { Store } from '@ngrx/store';
import { getImagesAction } from '../../store/images/images.actions';
import { Observable } from 'rxjs';
import { getImagesSelector, getTotalImagesCountSelector } from '../../store/images/images.selectors';
import { IImagesState } from '../../store/images/app.store';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent implements OnInit {
    @ViewChild(MatPaginator)
    private readonly _paginator: MatPaginator;

    public isEmptySearch = false;
    public pageSize = 10;
    public photos: IFlickrPhoto[] = [];
    public searchControl: FormControl;
    public totalImagesCount$: Observable<any> = this._store.select(getTotalImagesCountSelector);

    private readonly _dataSource: MatTableDataSource<any> = new MatTableDataSource();
    public images$: Observable<IFlickrPhoto[]> = this._store.select(getImagesSelector);
    private _searchString: string;
    private _currentPage = 1;

    constructor(
        private readonly _flickrService: FlickrService,
        private readonly _store: Store<IImagesState>
    ) {}

    ngOnInit(): void {
        this._dataSource.paginator = this._paginator;
        this.searchControl = new FormControl(
            this._searchString
        );
    }

    private _getImages(): void {
        this._store.dispatch(getImagesAction({
            name: this._searchString,
            pageSize: this.pageSize,
            currentPage: this._currentPage
        }));
    }

    public onSearch(): void {
        this._searchString = this.searchControl.value.toLowerCase();
        this._getImages();
    }

    public onPageChange(event: PageEvent): void {
        this.pageSize = event.pageSize;
        this._currentPage = event.pageIndex + 1;
        this._getImages();
    }
}
