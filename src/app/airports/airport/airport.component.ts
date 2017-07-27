import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent {

  @Input()
  public airport: IAirport;

  @Output()
  choosed = new EventEmitter();

  public clicked() {
    this.choosed.emit(this.airport);
  }
}
