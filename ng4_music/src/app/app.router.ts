import {Routes} from '@angular/router';
import { SearchComponent } from 'app/search/search.component';
import { AlbumComponent } from 'app/album/album.component';
import { TrackComponent } from 'app/track/track.component';

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: 'search', pathMatch: 'full'},
    {path: 'search', component: SearchComponent},
    {path: 'album/:id', component: AlbumComponent},
    {path: 'track/:id', component: TrackComponent}
];