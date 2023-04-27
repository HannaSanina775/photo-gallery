import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritePhotosComponent } from './favorite-photos.component';

const routes: Routes = [{ path: '', component: FavoritePhotosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritePhotosRoutingModule { }
