import { useState } from 'react';
import { Button, Input } from '@/components/atoms';
import styles from './WeatherForm.module.css';
import { WeatherFormProps } from './WeatherForm.types';

export function WeatherForm({ onFetchWeather }: WeatherFormProps) {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  return (
    <div>
      <div className={styles.wrapper}>
        <Input
          placeholder="city"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          className={styles.input}
        />
        <Input
          placeholder="country"
          value={country}
          onChange={(e) => setCountry(e.currentTarget.value)}
          className={styles.input}
        />
        <Button
          title="GET WEATHER"
          onClick={() => onFetchWeather(`${city}, ${country} `)}
        />
      </div>
    </div>
  );
}
