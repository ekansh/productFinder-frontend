import { Component, OnInit } from '@angular/core';
import { MaincontentService } from '../maincontent.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string;
  menuOpened: boolean;
  constructor(private contentService: MaincontentService) { }

  ngOnInit() {
    this.init();
    this.menuOpened = false;
  }
  init(): void {
      this.contentService.getTitle().subscribe(e => this.title = e);
  }
  onResize(event) {

    const innerWidth = event.target.innerWidth;
    console.log(innerWidth + this.menuOpened);

    if (innerWidth > 767) {
      this.menuOpened = false;
      //console.log("width less than 767");
    }
  }
}
