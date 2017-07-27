export let WeatherTypes = {
  sun: 1,
  sunCloud: 2,
  cloud: 3,
  rain: 4,
  storm: 5,
};

let typesMap: {};
typesMap = {};
typesMap[WeatherTypes.sun] = 'assets/images/weather/w1.png';
typesMap[WeatherTypes.sunCloud] = 'assets/images/weather/w2.png';
typesMap[WeatherTypes.cloud] = 'assets/images/weather/w3.png';
typesMap[WeatherTypes.rain] = 'assets/images/weather/w4.png';
typesMap[WeatherTypes.storm] = 'assets/images/weather/w5.png';

export let WeatherTypesMap = typesMap;
