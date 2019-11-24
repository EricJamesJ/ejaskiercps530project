import { Component } from '@angular/core';
import { CaptionServiceService } from './caption-service.service'


@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})

export class Page4Component {
  activeImageUrl = "https://i.redd.it/eeu3eit5sua31.jpg";
  activeCaption;
  activeCaptionNum = -1;
  data;
  constructor(private _capService: CaptionServiceService) {}

  newImage(){
	this._capService.getNextCaption(this.activeCaptionNum + 1).subscribe(data => {
		this.data = data;
		this.activeCaption = this.data.caption; 
		this.activeImageUrl = this.data.url;
		this.activeCaptionNum = this.activeCaptionNum + 1; 
		console.log(this.activeCaption);
	});
  }
  
  ngOnInit() {
	this.newImage();
  }
}