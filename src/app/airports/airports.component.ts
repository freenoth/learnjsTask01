import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css']
})
export class AirportsComponent implements OnInit {
  @Input()
  public airportsList;

  @Output()
  currentAirport = new EventEmitter();

  public currentImage;

  constructor() {
  }

  ngOnInit() {
    this.currentImage = this.airportsList[0].image;
  }

  chooseAirport(airport) {
    this.currentImage = airport.image;
    this.currentAirport.emit(airport);
  }
}

