import { Component, OnInit } from '@angular/core';
import { AlbumlistService } from 'app/service/albumlist.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private result: Array<any>;
  constructor(private albumlistServe: AlbumlistService) {
  }

  ngOnInit() {
    this.albumlistServe.albumlist().subscribe(res => {
      this.result = res.data;
    });
  }

  // 搜索方法
  submit(value: any): void {
    console.log(value);
  }
}
