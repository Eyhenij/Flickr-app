import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IPhotoObject } from '../../interfaces/flickr.interface';
import { Store } from '@ngrx/store';
import { createBookmarkAction, removeBookmarkAction } from '../../store/bookmarks/bookmarks.actions';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-image-card',
    templateUrl: './image-card.component.html',
    styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit{
    @Input()
    public image: IPhotoObject;
    @Input()
    public isSearchPage: boolean;

    @ViewChild(MatPaginator)
    private readonly _paginator: MatPaginator;

    public tagsControl: FormControl;

    private readonly _dataSource: MatTableDataSource<any> = new MatTableDataSource();
    private _tags: string;

    constructor(private readonly _store$: Store) {}

    ngOnInit(): void {
        this._dataSource.paginator = this._paginator;
        this.tagsControl = new FormControl(this._tags);
    }

    public onTagsInput(): void {
        this._tags = this.tagsControl.value;
    }

    public makeBookmark(): void {
        this._store$.dispatch(createBookmarkAction({ newBookmark: this.image, tags: this._tags }));
    }

    public removeBookmark(): void {
        this._store$.dispatch(removeBookmarkAction({ id: this.image.id }));
    }
}
