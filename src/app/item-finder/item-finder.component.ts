import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MaincontentService } from '../maincontent.service';
@Component({
  selector: 'app-item-finder',
  templateUrl: './item-finder.component.html',
  styleUrls: ['./item-finder.component.css']
})
export class ItemFinderComponent implements OnInit {
storeid: string;
results:string;
searched=false;
product='';
category='';
  constructor(private route: ActivatedRoute, private contentService: MaincontentService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.storeid = params.get('id');
        console.log("id opbtained " + this.storeid);
      }
    );
  }

  search() {
    console.log("Searched    "+this.product+" :: category : "+this.category);
  }

}
