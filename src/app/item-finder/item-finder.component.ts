import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MaincontentService } from '../maincontent.service';
import { SearchResult } from '../model/store';
@Component({
  selector: 'app-item-finder',
  templateUrl: './item-finder.component.html',
  styleUrls: ['./item-finder.component.css']
})
export class ItemFinderComponent implements OnInit {
storeid: string;
locationid: string;
results:SearchResult[];
searched=false;
product='';

  constructor(private route: ActivatedRoute, private contentService: MaincontentService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.storeid = params.get('storeid');
        this.locationid = params.get('locationid');
        console.log("id obtained " + this.storeid);
      }
    );
  }

  search() {
    console.log("Searched    "+this.product);
     this.contentService.getSearchResults(this.locationid,this.product).subscribe(e => this.results = e);
  }

}
