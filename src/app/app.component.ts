import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'

export interface Cat {
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  constructor(private http: HttpClient) {}

  title = this.http.get<Cat[]>('http://ejaskiercps530project.herokuapp.com//api/cats')[0].name;
}
