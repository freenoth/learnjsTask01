import { Component } from '@angular/core';
import { Airport } from './airports/airport/airport.component';
import { WeatherInfo } from './weather/weather.component';
import { SocialsInfo } from './socials/socials.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1st homework for learning Angular JS';
  public airports_list;
  public currentAirport;

  constructor() {
    this.airports_list = [
      new Airport(
        'Moscow Air',
        'Russia',
        '+7 900 888 77 66',
        'assets/images/airports/domodedovo-14.jpg',
        new WeatherInfo(-15, WeatherInfo.TYPE_CLOUD),
        new SocialsInfo('rus_air', 15, 2, 'assets/images/airports/domodedovo-10.jpg'),
      ),
      new Airport(
        'London Air',
        'Great Britan',
        '+90876656554',
        'assets/images/airports/london_city_airport.jpg',
        new WeatherInfo(12, WeatherInfo.TYPE_SUN_CLOUD),
        new SocialsInfo('british_air', 500, 35, 'assets/images/airports/british-airways.jpg'),
      ),
      new Airport(
        'Washington Air',
        'USA',
        '+4434343',
        'assets/images/airports/transportation201302dulles2-600x410.jpg',
        new WeatherInfo(35, WeatherInfo.TYPE_SUN),
        new SocialsInfo('washington_air', 12567, 3515, 'assets/images/airports/s1.reutersmedia.net.jpeg'),
      ),
      new Airport(
        'Tokyo Air',
        'Japan',
        '+09988',
        'assets/images/airports/index.jpeg',
        new WeatherInfo(7, WeatherInfo.TYPE_STORM),
        new SocialsInfo('tokyo_air', 133312, 23132, 'assets/images/airports/Keisei_Narita_Airport_Station-770x577.jpg'),
      ),
      new Airport(
        'Pekin Air',
        'China',
        '+54323456787654',
        'assets/images/airports/pekin-aeroport-kitay.jpg',
        new WeatherInfo(29, WeatherInfo.TYPE_RAIN),
        new SocialsInfo('china_air', 44214214, 1234324, 'assets/images/airports/109979.jpg'),
      ),
    ];
    this.currentAirport = this.airports_list[0];
  }

  public chooseCurrent(airport) {
    this.currentAirport = airport;
  }
}
