import { Component, OnInit } from '@angular/core';
import { DataFetchService } from "../../services/data-fetch.service";
import { ShopData } from "../../services/models";
@Component({
	selector: 'app-electronics',
	templateUrl: './electronics.component.html',
	styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {

	constructor(private dataService: DataFetchService) { }

	products:ShopData;
	
	ngOnInit(): void {
		this.dataService.fetchShopData("electronics").subscribe((res) => this.products = res);
	}

}
