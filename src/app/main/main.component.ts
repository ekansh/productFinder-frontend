import { Component, OnInit } from '@angular/core';
import { MaincontentService } from '../maincontent.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 stores: Map<string, string>;
 locations: Map<string, string>;
 astore='';
 alocation='';
 storeSelectedState=false;
 locationSelected= false;
  constructor(private contentService: MaincontentService) { }

  ngOnInit() {
        this.contentService.getStores().subscribe(e => this.stores = e);
  }
 getKeys(map){
    return Array.from(map.keys());
  }
  storeSelected(){
    console.log("state changed "+this.astore);
    this.storeSelectedState=true;
    this.contentService.getStoreLocation(this.stores.get(this.astore)).subscribe(e => this.locations = e);
  }
   storeLocationSelected(){
     console.log("location "+this.alocation);
     this.locationSelected=true;
   }
}
