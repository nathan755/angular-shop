import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ShopData } from "./models"



@Injectable({
	providedIn: 'root'
})
export class DataFetchService {

	private baseUrl: string = "https://fakestoreapi.com/products";

	constructor(private request: HttpClient) { }

	public fetchShopData(category?: string):Observable<ShopData> {
		if(category !== undefined){
			return this.request.get<ShopData>(`${this.baseUrl}/category/${category}`);
		}
		else{
			return this.request.get<ShopData>(this.baseUrl);
		}
		
	}
}
