import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoGridComponent } from './photo-grid/photo-grid.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

const routes: Routes = [
  { path: 'photos/:id', component: DetailViewComponent, title: "Photo Details" },

  { path: 'favorites', title: "Favorites Photos", loadChildren: () => import('./favorite-photos/favorite-photos.module').then(m => m.FavoritePhotosModule) },
  { path: "", component: PhotoGridComponent, title: "All Photos" }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
