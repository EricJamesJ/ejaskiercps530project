import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {
  constructor() { }
  
  title = "Random text";
  imgUrl = "https://i.redd.it/v8d7slbdx6o31.jpg";
 
  ngOnInit() {
  }
}
