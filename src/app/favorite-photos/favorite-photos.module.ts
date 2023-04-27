import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritePhotosRoutingModule } from './favorite-photos-routing.module';
import { FavoritePhotosComponent } from './favorite-photos.component';
import { MaterialModule } from '../material.module';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    FavoritePhotosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FavoritePhotosRoutingModule,
    NgOptimizedImage
  ]
})
export class FavoritePhotosModule { }
