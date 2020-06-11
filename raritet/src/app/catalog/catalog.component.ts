import { Component, OnInit } from '@angular/core';
import { Catalog, Items } from '../shared/catalog';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  catalog: Catalog[];
  items: Items[];


  Item(num: number, func: number) {
    this.httpService.Item(num, func);
  }
  constructor(private httpService: HttpService) { this.catalog = []; this.items = []; }

  ngOnInit() {
    this.catalog = this.httpService.getCatalog();
    this.items = this.httpService.getItems(0);

  }
  getItemsId(gid: number) {
    this.items = this.httpService.getItems(gid);
  }


}
