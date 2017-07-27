import {Component} from '@angular/core';
import {WeatherTypes} from '../consts/weather';
import {WeatherInfo} from '../classes/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = '1st homework for learning Angular JS';
  public airportsList: [IAirport];
  public currentAirport: IAirport;

  constructor() {
    this.airportsList = [
      {
        name: 'Moscow Air',
        country: 'Russia',
        phone: '+7 900 888 77 66',
        image: 'assets/images/airports/domodedovo-14.jpg',
        weather: new WeatherInfo({
          temp: -15, weatherType: WeatherTypes.cloud
        }),
        socials: {
          username: 'rus_air', likes: 15, followers: 2,
          image: 'assets/images/airports/domodedovo-10.jpg'
        }
      },
      {
        name: 'London Air',
        country: 'Great Britain',
        phone: '+90876656554',
        image: 'assets/images/airports/london_city_airport.jpg',
        weather: new WeatherInfo({
          temp: 12, weatherType: WeatherTypes.sunCloud
        }),
        socials: {
          username: 'british_air', likes: 500, followers: 35,
          image: 'assets/images/airports/british-airways.jpg'
        }
      },
      {
        name: 'Washington Air',
        country: 'USA',
        phone: '+4434343',
        image: 'assets/images/airports/transportation201302dulles2-600x410.jpg',
        weather: new WeatherInfo({
          temp: 35, weatherType: WeatherTypes.sun
        }),
        socials: {
          username: 'washington_air', likes: 12567, followers: 3515,
          image: 'assets/images/airports/s1.reutersmedia.net.jpeg'
        }
      },
      {
        name: 'Tokyo Air',
        country: 'Japan',
        phone: '+09988',
        image: 'assets/images/airports/index.jpeg',
        weather: new WeatherInfo({
          temp: 7, weatherType: WeatherTypes.storm
        }),
        socials: {
          username: 'tokyo_air', likes: 133312, followers: 23132,
          image: 'assets/images/airports/Keisei_Narita_Airport_Station-770x577.jpg'
        }
      },
      {
        name: 'Beijing Air',
        country: 'China',
        phone: '+54323456787654',
        image: 'assets/images/airports/pekin-aeroport-kitay.jpg',
        weather: new WeatherInfo({
          temp: 29, weatherType: WeatherTypes.rain
        }),
        socials: {
          username: 'china_air', likes: 44214214, followers: 1234324,
          image: 'assets/images/airports/109979.jpg'
        }
      },
    ];
    this.currentAirport = this.airportsList[0];
  }

  public changeCurrent(airport) {
    this.currentAirport = airport;
  }
}
