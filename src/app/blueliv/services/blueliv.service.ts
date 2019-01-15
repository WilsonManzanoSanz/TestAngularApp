import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class BluelivService {

  
  constructor( private http: HttpClient) { 
    
  }

  getSparksByTAG(tag:string, page:number){
    /*fetch('https://community.blueliv.com/api/v1/sparks/timeline?since_id=1&limit=10', {headers:{'Authorization':'Token 09b7b409-eff2-4725-be48-684e8941a1b4', 'Access-Control-Allow-Origin':'*'}})
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson);
    });*/
    //console.log('ECHE',`${environment.api_base}/tags/${tag}/sparks`);
    let newParams = new HttpParams().set('since_id', String(1)).set('limit', String(page));
    return this.http.get<any>(`${environment.api_base}/tags/${tag}/sparks`, {params:newParams});
  }
}
