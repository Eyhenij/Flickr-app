import { TestBed } from '@angular/core/testing';
import { FlickrService } from './flickr-service.service';

describe('FlickrServiceService', () => {
    let flickrService: FlickrService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        flickrService = TestBed.inject(FlickrService);
    });

    it('should be created', () => {
        expect(flickrService).toBeTruthy();
    });
});
