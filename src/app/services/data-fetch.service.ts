import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Product {
	id: number,
	title: string,
	price: number,
	description: string,
	category: string,
	image: string
};

interface Response extends Array<Product>{};


@Injectable({
	providedIn: 'root'
})
export class DataFetchService {

	private baseUrl: string = "https://fakestoreapi.com/products";

	constructor(private request: HttpClient) { }

	public fetchShopData(category?: string):Observable<Response> {
		if(category !== undefined){
			return this.request.get<Response>(this.baseUrl+category);
		}
		else{
			return this.request.get<Response>(this.baseUrl);
		}
		
	}
}
