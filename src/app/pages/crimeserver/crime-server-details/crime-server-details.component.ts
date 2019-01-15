import { Component, OnInit } from '@angular/core';
import  ProgressBar  from 'progressbar.js';
import {ActivatedRoute} from '@angular/router';
import {CrimeserverService} from '../../../services/crimeserver/crimeserver.service';
declare var go: any;

@Component({
  selector: 'app-crime-server-details',
  templateUrl: './crime-server-details.component.html',
  styleUrls: ['./crime-server-details.component.css']
})
export class CrimeServerDetailsComponent implements OnInit {

  public crime:any = {};

  constructor(private route: ActivatedRoute, private crimeserverService:CrimeserverService) { }

  ngOnInit() {
    this.getDetails();
    this.configCirclePercent();
  }

  configGOJS(){
    const $ = go.GraphObject.make;
    let myDiagram = $(go.Diagram, "goJS");
    
    let model = $(go.GraphLinksModel);

    model.nodeDataArray =
    [
      { key: this.crime.type },
      { key: this.crime.links.self },
      { key: this.crime.relationships.fqdn.links.related }
    ];
    model.linkDataArray =
    [
      { from: this.crime.links.self, to: this.crime.type  },
      { from: this.crime.links.self, to: this.crime.relationships.fqdn.links.related },
      
    ];
    myDiagram.model = model;
  }

  configCirclePercent(){
    const confidentBar = new ProgressBar.Circle('#circle-confidence', {
      color:'green',
      easing: 'easeInOut',
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    confidentBar.animate(0.7);  // Value from 0.0 to 1.0
    const threatBar = new ProgressBar.Circle('#circle-threat', {
      color:'red',
      easing: 'easeInOut',
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    threatBar.animate(0.9);  // Value from 0.0 to 1.0
  }

  getDetails(){
    this.route.params.subscribe( params => {
      this.crimeserverService.getCrime(params.id).subscribe(
        data => {
          this.crime = data;
          this.configGOJS();
        },
        error => console.error(error)
      );
    });
  }

}
