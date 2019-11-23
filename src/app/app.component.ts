import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'
import {AppService} from './app.service';


export interface Cat {
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private _appService: AppService) {}
  cat;

  title = "ASDF";
  ngOnInit() {
    this.getFoods();
  }
  
  getFoods() {
    this._appService.getCats().subscribe(data => {this.cat = data;	this.title = this.cat.name;});
  }
}
