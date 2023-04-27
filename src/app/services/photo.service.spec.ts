import { TestBed } from '@angular/core/testing';

import { PhotoService } from './photo.service';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { PhotoItem } from '../entities/photo-item';
import { of } from 'rxjs';


describe('PhotoService', () => {
  let service: PhotoService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new PhotoService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected photos (HttpClient called once)', (done: DoneFn) => {
    const expectedPhotos: PhotoItem [] =
      [{ url: "testUrl", download_url: "A", id: "1", "author": "author1" }, { url: "testUrl2", download_url: "B", id: "2", "author": "author1"  }];

    httpClientSpy.get.and.returnValue(of(expectedPhotos));

    service.getPhotos().subscribe({
      next: photos => {
        expect(photos)
          .withContext('expected photos')
          .toEqual(expectedPhotos);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });

});
