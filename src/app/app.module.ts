import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule, MatInputModule, MatProgressSpinnerModule, MatPaginatorModule} from '@angular/material';

import {AppComponent} from './app.component';
import {VideoLibraryComponent} from './components/video-library/video-library.component';
import {VideoThumbComponent} from './components/video-thumb/video-thumb.component';
import {VideoLibraryService} from './services/video-library.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: '', redirectTo: '/videos', pathMatch: 'full'},
  {path: 'videos', component: VideoLibraryComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    VideoLibraryComponent,
    VideoThumbComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatPaginatorModule
  ],
  providers: [VideoLibraryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
