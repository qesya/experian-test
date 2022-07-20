import { CurrentWeather, Location } from '@/types';
import { API_BASE_URL, API_KEY, checkHandler, errorHandler } from './handler';

type GetCurrentWeatherRequest = {
  city: string;
};

export type GetCurrentWeatherResponse = {
  location: Location;
  current: CurrentWeather;
};

export const getCurrentWeather = (
  data: GetCurrentWeatherRequest
): Promise<GetCurrentWeatherResponse> => {
  return fetch(
    API_BASE_URL + '/current.json?key=' + API_KEY + '&q=' + data.city,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    }
  )
    .then(checkHandler)
    .catch(errorHandler);
};
