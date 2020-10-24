import { Component, OnInit } from '@angular/core';
import { DataFetchService } from "../../services/data-fetch.service";
import { ShopData } from "../../services/models";
@Component({
  selector: 'app-womans-clothes',
  templateUrl: './womans-clothes.component.html',
  styleUrls: ['./womans-clothes.component.scss']
})
export class WomansClothesComponent implements OnInit {

  constructor(private dataService: DataFetchService) { }

  products:ShopData;

  ngOnInit(): void {
    this.dataService.fetchShopData("women clothing").subscribe((res) => this.products = res);
  }

}
