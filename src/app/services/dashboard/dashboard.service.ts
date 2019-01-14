import { Injectable } from '@angular/core';
import { bootGraph } from './dataservice';
import { credentialsGraph } from './dataservice';
import { creditCardGraph } from './dataservice';
import { crimeServerGraph } from './dataservice';
import { malwareGraph } from './dataservice';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public boots:any = bootGraph;
  public credentials:any = credentialsGraph;
  public creditCard:any = creditCardGraph;
  public crimeServer:any = crimeServerGraph;
  public malware:any = malwareGraph;

  constructor() { 

  }

  getBoots(){
    console.log(this.boots);
    return this.boots;
  }

  getCredentials(){
    return this.credentials;
  }

  getCreditCard(){
    return this.creditCard;
  }

  getCrimeServer(){
    return this.crimeServer;
  }

  getMalware(){
    return this.malware;
  }

  
}
