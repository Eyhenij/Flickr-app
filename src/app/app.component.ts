import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getOnLoadingValueSelector } from './store/app.selectors';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    public onLoading$: Observable<boolean> = this._store$.select(getOnLoadingValueSelector);
    constructor(private readonly _store$: Store) {}
}
