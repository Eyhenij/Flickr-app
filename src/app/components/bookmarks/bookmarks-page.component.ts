import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPhotoObject } from '../../interfaces/flickr.interface';
import { getBookmarksSelector } from '../../store/bookmarks/bookmarks.selectors';

@Component({
    selector: 'app-bookmarks',
    templateUrl: './bookmarks-page.component.html',
    styleUrls: ['./bookmarks-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookmarksPageComponent {
    public bookmarks$: Observable<IPhotoObject[]> = this._store$.select(getBookmarksSelector);
    constructor(private readonly _store$: Store) {}
}
