import { Component, OnInit } from '@angular/core';
import { ShopData } from "../../services/models";
import { DataFetchService } from "../../services/data-fetch.service";
@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.scss']
})
export class JeweleryComponent implements OnInit {

  constructor(private dataService: DataFetchService) { }

  products:ShopData;

  ngOnInit(): void {
    this.dataService.fetchShopData("jewelery").subscribe((res) => this.products = res);
  }

}
