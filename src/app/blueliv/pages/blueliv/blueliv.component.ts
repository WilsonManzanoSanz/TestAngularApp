import { Component, OnInit } from '@angular/core';
import { BluelivService } from '../../services/blueliv.service';

@Component({
  selector: 'app-blueliv',
  templateUrl: './blueliv.component.html',
  styleUrls: ['./blueliv.component.css']
})
export class BluelivComponent implements OnInit {

  constructor( private bluelivService:BluelivService) { }

  ngOnInit() {
    this.getSparksByTAG();
  }

  getSparksByTAG(){
    this.bluelivService.getSparksByTAG('BOTNET',10).subscribe(
      response => console.log(response),
      error => console.error(error),
    );
  }

}
