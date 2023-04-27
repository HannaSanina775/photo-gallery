import { TestBed } from '@angular/core/testing';

import { FavoriteLocalStorageService } from './favorite-local-storage.service';
import { PhotoItem } from '../entities/photo-item';

describe('FavoriteLocalStorageService', () => {
  let favService: FavoriteLocalStorageService;
  let photoItem = {download_url: "", id: "", url: "", author: ""};
  let testKey = "favoriteCollection";

  beforeEach(() => {
    TestBed.configureTestingModule({});
    favService = TestBed.inject(FavoriteLocalStorageService);
    photoItem.download_url = "";
    photoItem.id = "";
    photoItem.url = "";
    localStorage.setItem(testKey, JSON.stringify([photoItem]));
  });

  // next 3 tests are added only as dummy stabs because no need to test standart localstorage functions.
  // They will make more sense once the storage has specific logic/conversion

  it('#getFavorites should return value from local storage', () => {
    expect(favService.getFavorites()).toEqual([photoItem]);
  });

  it('#addToFavorite should set value to local storage', () => {
    expect(favService.addToFavorite(photoItem)).toBeTrue();
  });

  it('#removeFavorite should remove value from local storage', () => {
    expect(favService.removeFavorite(photoItem.download_url)).toBeTrue();
  });

});
