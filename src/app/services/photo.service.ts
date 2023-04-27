import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoItem } from '../entities/photo-item';
import { IPhotoService } from './interfaces/iphoto-service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService implements IPhotoService<PhotoItem>{
  counter = 1;
  photoDataUrl = `https://picsum.photos/v2/list?limit=9&page=`;

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Array<PhotoItem>> {
    this.counter++;
    return this.http.get<Array<any>>(this.photoDataUrl + this.counter);
  }
}
