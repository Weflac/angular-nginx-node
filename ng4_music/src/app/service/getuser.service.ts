import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class GetuserService {

  constructor(private http: Http) { }
  getUser(id: any) {
    return this.http.request(`/userlist?id=${id}`).map(res => res.json());
  }
}
