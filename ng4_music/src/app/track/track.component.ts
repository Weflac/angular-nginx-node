import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  private data: any;
  constructor(private http: Http) {
    this.data = http.get('http://jsonplaceholder.typicode.com/posts/1').map((res) => res.json());
   }

  ngOnInit() {
    this.data.subscribe((res) => {
      console.log(res);
    })
  }

}
