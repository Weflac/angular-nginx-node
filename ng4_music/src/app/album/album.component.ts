import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GetuserService } from "app/service/getuser.service";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  private id: string;
  private result: Object;
  constructor(private route: ActivatedRoute, private getuser: GetuserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(typeof params['id']);
      this.id = params['id'];
    });
    this.getuse(this.id);
  }
  getuse(id: string): void {
    this.getuser.getUser(id).subscribe(res => {
      console.log(res);
      this.result = res.data;
    });
  }
}
