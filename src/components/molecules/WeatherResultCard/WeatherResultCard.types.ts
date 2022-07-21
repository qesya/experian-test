import { CurrentWeather, Location, TemperatureUnit } from '@/types';

export type WeatherResultCardProps = {
  weather: CurrentWeather;
  selectedUnits: TemperatureUnit;
  location: Location;
};
