import { Injectable } from '@angular/core';
import { IFavoriteService } from './interfaces/ifavorite-service';
import { PhotoItem } from '../entities/photo-item';
const key = "favoriteCollection";

@Injectable({
  providedIn: 'root'
})
export class FavoriteLocalStorageService implements IFavoriteService<PhotoItem> {
  constructor() { }

  addToFavorite(item: PhotoItem): boolean {
    let result = true;
    try {
      let updatedCollection = this.getFavorites().concat(item);
      localStorage.setItem(key, JSON.stringify(updatedCollection));
    }
    catch (e: any) {
      return false;
    }

    return result;
  }

  getFavorites(): PhotoItem[] {
    let collection = localStorage.getItem(key);

    return collection ? JSON.parse(collection) : [];
  }

  removeFavorite(download_url: string): boolean {
    let result = true;
    try {
      let updatedCollection = this.getFavorites();
      let indexToRemove = updatedCollection.findIndex(value => value.download_url == download_url);
      updatedCollection.splice(indexToRemove, 1);

      localStorage.setItem(key, JSON.stringify(updatedCollection));
    }
    catch (e: any) {
      return false;
    }

    return result;
  }
}
