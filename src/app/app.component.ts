import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getOnLoadingSelector } from './store/images/images.selectors';
import { IImagesState } from './store/images/app.store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    public onLoading$: Observable<boolean> = this._store.select(getOnLoadingSelector);
    constructor(private readonly _store: Store<IImagesState>) {}
}
