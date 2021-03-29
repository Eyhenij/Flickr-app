import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { BookmarksPageComponent } from './components/bookmarks/bookmarks-page.component';

const routes: Routes = [
    {path: 'search', component: SearchPageComponent},
    {path: 'bookmarks', component: BookmarksPageComponent},
    {path: '**', redirectTo: 'search'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
