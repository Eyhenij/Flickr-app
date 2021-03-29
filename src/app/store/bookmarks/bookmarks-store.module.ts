import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksService } from '../services/bookmarks.service';
import { StoreModule } from '@ngrx/store';
import { BOOKMARKS_FEATURE_NODE } from '../app.store';
import { EffectsModule } from '@ngrx/effects';
import { bookmarksReducer } from './bookmarks.reducer';
import { BookmarksEffects } from './bookmarks.effects';


@NgModule({
    providers: [BookmarksService],
    imports: [
        CommonModule,
        StoreModule.forFeature(BOOKMARKS_FEATURE_NODE, bookmarksReducer),
        EffectsModule.forFeature([BookmarksEffects])
    ]
})
export class BookmarksStoreModule {}
