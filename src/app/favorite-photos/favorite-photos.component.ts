import { Component } from '@angular/core';
import { PhotoItem } from '../entities/photo-item';
import { FavoriteLocalStorageService } from '../services/favorite-local-storage.service';

@Component({
  selector: 'app-favorite-photos',
  templateUrl: './favorite-photos.component.html',
  styleUrls: ['./favorite-photos.component.scss'],
})
export class FavoritePhotosComponent {
  favPhotoData = new Array<PhotoItem>;

  constructor(private favoriteService: FavoriteLocalStorageService) {}

  ngOnInit() {
    this.favPhotoData = this.favoriteService.getFavorites();
  }
}
