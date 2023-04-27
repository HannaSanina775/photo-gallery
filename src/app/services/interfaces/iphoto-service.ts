import { Observable } from 'rxjs';

export interface IPhotoService<T> {
  getPhotos(): Observable<Array<T>>;
}
