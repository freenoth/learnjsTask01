import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input()
  public currentWeather: WeatherInfo;

  constructor() { }

  ngOnInit() {
  }
}

export class WeatherInfo {
  public static TYPE_SUN = 'sun';
  public static TYPE_SUN_CLOUD = 'suncloud';
  public static TYPE_CLOUD = 'cloud';
  public static TYPE_RAIN = 'rain';
  public static TYPE_STORM = 'storm';

  public temp: number;
  public weatherType: string;

  protected weatherTypes = {
    'sun': 'assets/images/weather/w1.png',
    'suncloud': 'assets/images/weather/w2.png',
    'cloud': 'assets/images/weather/w3.png',
    'rain': 'assets/images/weather/w4.png',
    'storm': 'assets/images/weather/w5.png',
  };

  constructor (temp, type) {
    this.temp = temp;
    this.weatherType = type;
  }

  public getImage() {
    return this.weatherTypes[this.weatherType];
  }

  public getSign() {
    return this.temp < 0 ? '' : '+';
  }
}
