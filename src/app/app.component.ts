import { Component } from '@angular/core';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export interface Title {
  name: string
}
export class AppComponent {
  constructor(private http: HttpClient) {}
  getTitle(): Observable<Title> {
    return this.http.get<Cat[]>('https://ejaskiercps530project.herokuapp.com/api/title')
  }
  title = 'Eric Jaskierski CPS530 Project';
  title = getTitle().name;
}
