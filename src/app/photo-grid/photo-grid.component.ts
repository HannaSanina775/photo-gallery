import { Component, HostListener } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Subscription, take } from 'rxjs';
import { PhotoItem } from '../entities/photo-item';
import { FavoriteLocalStorageService } from '../services/favorite-local-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss'],
})
export class PhotoGridComponent {
  photoData = new Array<PhotoItem>();
  serviceSub = new Subscription();

  timeout: any;
  showLoader = false;
  showSuccessLabel = false;

  constructor(private photoService: PhotoService, private favoriteService: FavoriteLocalStorageService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.serviceSub = this.photoService.getPhotos()
      .subscribe(data => {
        this.photoData = data;
      });
  }

  addToFavorite(item: PhotoItem) {
    this.showSuccessLabel = this.favoriteService.addToFavorite(item);
    if (this.showSuccessLabel) {
      this.openSnackBar("Successfully added");
    }
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, undefined, {
      duration: 2000
    });
  }

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      this.showLoader = true;

      this.timeout = setTimeout(() => {
        this.serviceSub = this.photoService.getPhotos()
          .pipe(take(1))
          .subscribe(data => {
            this.showLoader = false;
            this.photoData.push(...data);
          });
      }, Math.random() * 3000);

    }
  }

  ngOnDestroy() {
    clearTimeout(this.timeout);
    this.serviceSub.unsubscribe();
  }
}
