import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoriteLocalStorageService } from '../services/favorite-local-storage.service';
import { PhotoItem } from '../entities/photo-item';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent {
  id: string | null = "" ;
  detailedItem: PhotoItem = new PhotoItem();

  constructor(
    private route: ActivatedRoute,
    private favoriteService: FavoriteLocalStorageService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.detailedItem = this.favoriteService.getFavorites().find(item => item.id == this.id) ?? new PhotoItem();
  }

  removeFromFavorites(id: string) {
    let result = this.favoriteService.removeFavorite(id);
    if (result) {
      this.openSnackBar("Removed successfully");
    }
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, undefined, {
      duration: 2000
    });
  }

}
