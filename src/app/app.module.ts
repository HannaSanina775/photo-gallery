import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

import { AppComponent } from './app.component';
import { PhotoGridComponent } from './photo-grid/photo-grid.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { MaterialModule } from './material.module';
import { RouterOutlet } from '@angular/router';
import { httpInterceptorProviders } from './http-interceptors/interceptors-index';

@NgModule({
  declarations: [
    AppComponent,
    PhotoGridComponent,
    DetailViewComponent,
    ToolbarComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    HttpClientModule,
    NgOptimizedImage,
    RouterOutlet,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [httpInterceptorProviders],

  bootstrap: [AppComponent]
})
export class AppModule { }
