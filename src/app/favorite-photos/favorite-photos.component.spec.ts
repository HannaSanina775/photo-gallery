import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePhotosComponent } from './favorite-photos.component';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgOptimizedImage } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

describe('FavoritePhotosComponent', () => {
  let component: FavoritePhotosComponent;
  let fixture: ComponentFixture<FavoritePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatGridListModule, NgOptimizedImage, AppRoutingModule],
      declarations: [ FavoritePhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should init Favorite photos collection', () => {
    component.ngOnInit();
    expect(component.favPhotoData).toBeDefined();
  });
});
