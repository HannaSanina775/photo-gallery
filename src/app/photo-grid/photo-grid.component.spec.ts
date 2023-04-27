import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGridComponent } from './photo-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';

describe('PhotoGridComponent', () => {
  let component: PhotoGridComponent;
  let fixture: ComponentFixture<PhotoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, MatSnackBarModule, MatGridListModule ],
      declarations: [ PhotoGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should init Photo Data', () => {
    expect(component.photoData).toBeDefined();
  });

});
