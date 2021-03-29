import { Injectable } from '@angular/core';
import { IPhotoObject } from '../../interfaces/flickr.interface';

@Injectable({
    providedIn: 'root'
})
export class BookmarksService {
    public setNewBookmarkData(newBookmark: IPhotoObject): void {
        const oldBookmarks: IPhotoObject[] = JSON.parse(localStorage.getItem('bookmarks') as string);
        const updatedBookmarks: IPhotoObject[] = oldBookmarks ? oldBookmarks : [];
        updatedBookmarks.push(newBookmark);
        localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    }

    public removeBookmarkData(id: string): void {
        const oldBookmarks: IPhotoObject[] = JSON.parse(localStorage.getItem('bookmarks') as string);
        const updatedBookmarks: IPhotoObject[] = oldBookmarks.filter((el: IPhotoObject): boolean => el.id !== id);
        localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    }
}
