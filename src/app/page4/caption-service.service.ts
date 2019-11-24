import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class CaptionServiceService {

  constructor(private http:HttpClient) {}
  
  getNextCaption(nextCaptionNum: number) {
	return this.http.get('/api/caption/'+nextCaptionNum);
  }
}
