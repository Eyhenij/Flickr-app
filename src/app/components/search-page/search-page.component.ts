import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IPhotoObject } from '../../interfaces/flickr.interface';
import { Store } from '@ngrx/store';
import { getImagesAction } from '../../store/images/images.actions';
import { Observable, Subscription } from 'rxjs';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { getImagesSelector, getTotalImagesCountSelector } from '../../store/images/images.selectors';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
    selector: 'app-content',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit, OnDestroy {
    @ViewChild(MatPaginator)
    private readonly _paginator: MatPaginator;

    public isEmptySearch = true;
    public pageSize = 12;
    public searchControl: FormControl;
    public totalImagesCount$: Observable<any> = this._store$.select(getTotalImagesCountSelector);

    private readonly _dataSource: MatTableDataSource<any> = new MatTableDataSource();
    public images$: Observable<IPhotoObject[]> = this._store$.select(getImagesSelector);
    private _searchString: string;
    private _currentPage = 1;
    private _subscription: Subscription;

    constructor(private readonly _store$: Store) {}

    ngOnInit(): void {
        this._dataSource.paginator = this._paginator;
        this.searchControl = new FormControl(this._searchString);
        this._subscription = this.searchControl.valueChanges
            .pipe(
                filter((str: string): boolean => str.length > 2),
                debounceTime(500),
                distinctUntilChanged()
            ).subscribe((str: string): void => this._getImages(str));
    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }

    private _getImages(str?: string): void {
        this._store$.dispatch(getImagesAction({
            name: str ? str : this._searchString,
            pageSize: this.pageSize,
            currentPage: this._currentPage
        }));
    }

    public onSearch(): void {
        this.isEmptySearch = false;
        this._searchString = this.searchControl.value.toLowerCase();
    }

    public onPageChange(event: PageEvent): void {
        this.pageSize = event.pageSize;
        this._currentPage = event.pageIndex + 1;
        this._getImages();
    }
}
