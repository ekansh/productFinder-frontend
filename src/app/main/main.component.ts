import { Component, OnInit } from '@angular/core';
import { MaincontentService } from '../maincontent.service';
import {StoreVO,StoreLocationVO} from  '../model/store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 stores: StoreVO[];
 locations: StoreLocationVO[];
 astore:number;
 alocation:number;
 storeSelectedState=false;
 locationSelected= false;
  constructor(private contentService: MaincontentService) { }

  ngOnInit() {
        this.contentService.getStores().subscribe(e => this.stores = e);
        console.log(this.stores)
  }
 getKeys(map){
    return Array.from(map.keys());
  }
  storeSelected(){
    console.log("state changed "+this.astore);
    this.storeSelectedState=true;
    this.contentService.getStoreLocation(this.astore).subscribe(e => this.locations = e);
  }
   storeLocationSelected(){
     console.log("location "+this.alocation);
     this.locationSelected=true;
   }
}
