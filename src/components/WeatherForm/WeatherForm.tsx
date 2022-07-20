import { useState } from 'react';
import { Button } from '../base';
import { Input } from '../base/Input/Input';
import styles from './WeatherForm.module.css';

type Props = {
  onFetchWeather: (city: string) => void;
};

export function WeatherForm({ onFetchWeather }: Props) {
  const [city, setCity] = useState('');
  return (
    <div>
      <div className={styles.wrapper}>
        <Input
          placeholder="city"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          className={styles.input}
        />
        <Button title="GET WEATHER" onClick={() => onFetchWeather(city)} />
      </div>
    </div>
  );
}
