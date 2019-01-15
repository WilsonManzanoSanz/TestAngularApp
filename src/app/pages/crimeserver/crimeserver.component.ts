import { Component, OnInit } from '@angular/core';
import { CrimeserverService } from '../../services/crimeserver/crimeserver.service';


@Component({
  selector: 'app-crimeserver',
  templateUrl: './crimeserver.component.html',
  styleUrls: ['./crimeserver.component.css']
})
export class CrimeserverComponent implements OnInit {

  public crimes:any[];

  constructor( private crimeServerService: CrimeserverService) { }

  ngOnInit() {
    this.getCrimeFromServer();
  }

  getCrimeFromServer(){
    this.crimeServerService.getCrimeServerList().subscribe( 
      response => this.crimes = response.data,
      error => console.error(error)
    );
  }

}
