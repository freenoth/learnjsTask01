import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialsComponent } from './socials/socials.component';
import { AirportsComponent } from './airports/airports.component';
import { AirportComponent } from './airports/airport/airport.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SocialsComponent,
    AirportsComponent,
    AirportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
