import { Injectable } from '@angular/core';
import { crimeServerResponse } from './crimeserver';
import { Observable, of, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrimeserverService {

  public crimeServerList:any = crimeServerResponse;
  constructor() { 
  }

  getCrimeServerList(){
    return of(crimeServerResponse)
    //return this.crimeServerList;
  }

  getCrime(id){
    return of( this.crimeServerList.data.filter(value => value.id === id)[0]);
  }
}
