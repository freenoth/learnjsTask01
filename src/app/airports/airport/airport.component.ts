import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WeatherInfo } from '../../weather/weather.component';
import { SocialsInfo } from '../../socials/socials.component';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent implements OnInit {

  @Input()
  public airport;

  @Output()
  choose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}

export class Airport {
  public weather: WeatherInfo;
  public socials: SocialsInfo;

  public name;
  public country;
  public phone;
  public image;

  constructor(name, country, phone, image, weather, socials) {
    this.name = name;
    this.country = country;
    this.phone = phone;
    this.image = image;
    this.weather = weather;
    this.socials = socials;
  }
}
