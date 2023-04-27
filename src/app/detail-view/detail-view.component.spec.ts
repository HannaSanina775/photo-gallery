import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViewComponent } from './detail-view.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgOptimizedImage } from '@angular/common';
import { PhotoItem } from '../entities/photo-item';

describe('DetailViewComponent', () => {
  let component: DetailViewComponent;
  let fixture: ComponentFixture<DetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRoutingModule, MatSnackBarModule, NgOptimizedImage],
      declarations: [ DetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailViewComponent);
    component = fixture.componentInstance;
    const photo: PhotoItem  =
    { url: "testUrl", download_url: "A", id: "1", "author": "author1" }
    component.detailedItem = photo;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
