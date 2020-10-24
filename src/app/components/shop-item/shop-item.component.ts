import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../../services/models";

@Component({
	selector: 'app-shop-item',
	templateUrl: './shop-item.component.html',
	styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {

	@Input() productdata:Product

	constructor() { }

	ngOnInit(): void {
	}

}
