import { displayDate } from '@/utils/displayDate';
import { useState } from 'react';
import { CurrentWeather, Location } from '@/types';
import { Box, RadioButton, Text } from '../base';
import styles from './WeatherResult.module.css';

type Props = {
  weather: CurrentWeather;
  location: Location;
};

export function WeatherResult({ weather, location }: Props) {
  const [selectedUnits, setSelectedUnits] = useState<'celcius' | 'fahrenheit'>(
    'celcius'
  );

  const getTemperature = () => {
    const value = selectedUnits === 'celcius' ? weather.temp_c : weather.temp_f;
    const units = selectedUnits === 'celcius' ? '°C' : '°F';
    return value + units;
  };

  return (
    <div className={styles.container}>
      <div className={styles.localWrapper}>
        <Text>{displayDate(location.localtime_epoch)}</Text>
        <div className={styles.radioWrapper}>
          <RadioButton
            name="units"
            label="celcius"
            value="celcius"
            onChange={() => setSelectedUnits('celcius')}
          />
          <RadioButton
            name="units"
            label="fahrenheit"
            value="fahrenheit"
            onChange={() => setSelectedUnits('fahrenheit')}
          />
        </div>
      </div>
      <Box>
        <div className={styles.resultContainer}>
          <img
            src={weather.condition.icon}
            alt="weather condition"
            className={styles.weatherIcon}
          />
          <div className={styles.locationWrapper}>
            <Text variant="xl" bold>
              {getTemperature()}
            </Text>
            <Text variant="m">
              {location.name}, {location.country}
            </Text>
          </div>
        </div>
      </Box>
    </div>
  );
}
