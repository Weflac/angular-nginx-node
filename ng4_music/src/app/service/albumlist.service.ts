import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AlbumlistService {

  constructor(private http: Http) { }

  albumlist() {
    //return this.http.request('http://jsonplaceholder.typicode.com/posts/1').map(res => res.json());
    return this.http.request('/albumlist').map(res => res.json());
  }

}
