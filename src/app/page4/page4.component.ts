import { Component, OnInit } from '@angular/core';
import { CaptionServiceService } from './caption-service.service'

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})

export class Page4Component implements OnInit {
  activeImageUrl = "https://i.redd.it/eeu3eit5sua31.jpg";
  activeCaption;
  activeCaptionNum = -1;
  
  constructor(private _capService: CaptionServiceService) {}

  getNewImage(){return "https://i.redd.it/eeu3eit5sua31.jpg"}
  
  newImage(){
	this.activeImageUrl = this.getNewImage();
	this._capService.getNextCaption(this.activeCaptionNum + 1).subscribe(data => {this.activeCaption = data; this.activeCaptionNum = this.activeCaptionNum + 1; console.log(this.activeCaption);});
  }
  
  ngOnInit() {
	this.newImage();
  }
}
