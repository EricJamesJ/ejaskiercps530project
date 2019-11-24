import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private _appService: AppService) {}
  cat;
  title = "";
  name = "Eric Jaskierski";
  studentNumber = "500 644 178";
  courseCode = "CPS530";
  ngOnInit() {
    this.getFoods();
  }
  
  getFoods() {
    this._appService.getCats().subscribe(data => {this.cat = data;	this.title = this.cat.name;});
  }
  
  onClickProjectReq(){
    window.open("https://www.scs.ryerson.ca/~cps530/project/cps530_prj_f19.html", "_blank");
  }
}
