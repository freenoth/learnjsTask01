import { WeatherTypesMap } from '../consts/weather';

export class WeatherInfo implements IWeatherInfo {
  public temp: number;
  public weatherType: number;

  constructor (weather: IWeatherInfo) {
    this.temp = weather.temp;
    this.weatherType = weather.weatherType;
  }

  public getImage() {
    return WeatherTypesMap[this.weatherType];
  }

  public getSign() {
    return this.temp < 0 ? '' : '+';
  }
}
