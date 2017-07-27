import { Component, Input } from '@angular/core';
import { WeatherInfo } from '../../classes/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @Input()
  public currentWeather: WeatherInfo;
}
