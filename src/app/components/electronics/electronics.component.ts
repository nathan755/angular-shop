import { Component, OnInit } from '@angular/core';
import { DataFetchService } from "../../services/data-fetch.service";
@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {

  constructor(private dataService: DataFetchService) { }

  ngOnInit(): void {
    
    this.dataService.fetchShopData("electronics").subscribe((res)=>console.log("res", res))
  }

}
