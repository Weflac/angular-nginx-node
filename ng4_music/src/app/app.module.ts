import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from 'app/app.router';
import { AlbumlistService } from 'app/service/albumlist.service';
import { GetuserService } from "app/service/getuser.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, {useHash: true})
  ],
  providers: [
    AlbumlistService,
    GetuserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
