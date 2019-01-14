import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // lineChart
  public crimeChartData:Array<any> = [
    {data: {}, label: ''},
  ];
  public malwareChartData:Array<any> = [
    {data: {}, label: ''},
  ];
  public cardsChartData:Array<any> = [
    {data: {}, label: ''},
  ];
  public credentialsChartData:Array<any> = [
    {data: {}, label: ''},
  ];
  public botsChartData:Array<any> = [
    {data: {}, label: ''},
  ];

  public mainChartData:Array<any> = [
    {data: {}, label: ''},
  ];

  public crimeChartLabels:Array<any> = [];
  public malwareChartLabels:Array<any> = [];
  public credentialChartLabels:Array<any> = [];
  public cardsChartLabels:Array<any> = [];
  public botsChartLabels:Array<any> = [];
  public mainChartLabels:Array<any> = [];

  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  constructor(private dashboardService:DashboardService) { }

  ngOnInit() {
    this.initializeMainChart();
    this.getBotsChart();
    this.getCredentialsChart();
    this.getCrimesChart();
    this.getMalwaresChart();
    this.getCredentialsChart();
    this.getCardsChart();
  }

  getBotsChart(){
    this.botsChartData[0].data = this.dashboardService.getBoots().data.map((value, idx) => {
      this.botsChartLabels[idx] = value.attributes.date;
      return value.attributes.count;
    });
    this.botsChartData[0].label = `Boots${this.botsChartData[0].data.length}`;
  }

  getCredentialsChart(){
    this.credentialsChartData[0].data = this.dashboardService.getCredentials().data.map((value, idx) => {
      this.credentialChartLabels[idx] = value.attributes.date;
      return value.attributes.count;
    });
    this.credentialsChartData[0].label = `Credentials${this.credentialsChartData[0].data.length}`;
  }

  getMalwaresChart(){
    this.malwareChartData[0].data = this.dashboardService.getMalware().data.map((value, idx) => {
      this.malwareChartLabels[idx] = value.attributes.date;
      return value.attributes.count;
    });
    this.malwareChartData[0].label = `Malware${this.malwareChartData[0].data.length}`;
  }

  getCardsChart(){
    this.cardsChartData[0].data = this.dashboardService.getCreditCard().data.map((value, idx) => {
      this.cardsChartLabels[idx] = value.attributes.date;
      return value.attributes.count;
    });
    this.cardsChartData[0].label = `Cards${this.cardsChartData[0].data.length}`;
  }
  
  getCrimesChart(){
    this.crimeChartData[0].data = this.dashboardService.getCrimeServer().data.map((value, idx) => {
      this.crimeChartLabels[idx] = value.attributes.date;
      return value.attributes.count;
    });
    this.crimeChartData[0].label = `Crime${this.crimeChartData[0].data.length}`;
  }

  initializeMainChart(){
    this.mainChartData[0].data = this.dashboardService.getBoots().data.map((value, idx) => {
      this.mainChartLabels[idx] = value.attributes.date;
      return value.attributes.count;
    });
    this.mainChartData[0].label = `Bots${this.botsChartData[0].data.length}`;
  }
 
  // events
  public chartClicked(chartData:any, labels):void {
    console.log(chartData);
    console.log(labels);
    this.mainChartLabels = labels;
    this.mainChartData = chartData;
    this.mainChartData[0].label = `${chartData[0].label}`;
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


}
