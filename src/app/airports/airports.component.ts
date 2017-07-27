import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css']
})
export class AirportsComponent implements OnInit {
  @Input()
  public airportsList: [IAirport];

  @Output()
  airportChanged = new EventEmitter();

  public currentHeaderImage: string;

  ngOnInit() {
    this.currentHeaderImage = this.airportsList[0].image;
  }

  chooseAirport(airport: IAirport) {
    this.currentHeaderImage = airport.image;
    this.airportChanged.emit(airport);
  }
}
