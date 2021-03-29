import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { BookmarksPageComponent } from './components/bookmarks/bookmarks-page.component';
import { ImagesStoreModule } from './store/images/images-store.module';
import { BookmarksStoreModule } from './store/bookmarks/bookmarks-store.module';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        HeaderComponent,
        SearchPageComponent,
        FooterComponent,
        LoadingPageComponent,
        ImageCardComponent,
        BookmarksPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([]),
        ImagesStoreModule,
        BookmarksStoreModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
