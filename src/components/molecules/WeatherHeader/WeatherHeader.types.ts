import { Dispatch, SetStateAction } from 'react';
import { Location, TemperatureUnit } from '@/types';

export type WeatherHeaderProps = {
  setSelectedUnits: Dispatch<SetStateAction<TemperatureUnit>>;
  location: Location;
};
