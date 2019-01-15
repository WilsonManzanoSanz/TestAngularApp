import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class BluelivService {

  
  constructor( private http: HttpClient) { 
    
  }

  getSparksByTAG(tag:string, page:number){
    let newParams = new HttpParams().set('since_id', String(1)).set('limit', String(page));
    return this.http.get<any>(`${environment.api_base}/tags/${tag}/sparks`, {params:newParams});
  }
}
