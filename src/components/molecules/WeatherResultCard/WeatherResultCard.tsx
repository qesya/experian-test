import { Box, Text } from '@/components/atoms';
import styles from './WeatherResultCard.module.css';
import { WeatherResultCardProps } from './WeatherResultCard.types';

export function WeatherResultCard({
  weather,
  selectedUnits,
  location,
}: WeatherResultCardProps) {
  const getTemperature = () => {
    const value = selectedUnits === 'celcius' ? weather.temp_c : weather.temp_f;
    const units = selectedUnits === 'celcius' ? '°C' : '°F';
    return value + units;
  };

  return (
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
  );
}
