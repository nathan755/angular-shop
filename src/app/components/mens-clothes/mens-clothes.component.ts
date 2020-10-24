import { Component, OnInit } from '@angular/core';
import { DataFetchService } from "../../services/data-fetch.service";
import { ShopData } from "../../services/models";

@Component({
  selector: 'app-mens-clothes',
  templateUrl: './mens-clothes.component.html',
  styleUrls: ['./mens-clothes.component.scss']
})
export class MensClothesComponent implements OnInit {

  constructor(private dataService: DataFetchService) { }

  products:ShopData;

  ngOnInit(): void {
    this.dataService.fetchShopData("men clothing").subscribe((res) => this.products = res);
  }

}
