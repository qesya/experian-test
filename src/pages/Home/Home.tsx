import { useState } from 'react';
import ClipLoader from 'react-spinners/BeatLoader';
import { WeatherForm, WeatherResult } from '@/components';
import { Text } from '@/components/base';
import { GetCurrentWeatherResponse, getCurrentWeather } from '@/api/weather';
import styles from './Home.module.css';

export function Home() {
  const [result, setResult] = useState<GetCurrentWeatherResponse>();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchCurrentWeather = async (city: string) => {
    setIsLoading(true);
    try {
      const response = await getCurrentWeather({ city });
      setResult(response);
    } catch (error) {
      setError('Try another location :(');
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <WeatherForm onFetchWeather={fetchCurrentWeather} />
        {isLoading && (
          <div className={styles.loadingWrapper}>
            <div className={styles.loading}>
              <ClipLoader />
            </div>
          </div>
        )}
        {result && !error ? (
          <WeatherResult weather={result.current} location={result.location} />
        ) : (
          <Text className={styles.error}>{error}</Text>
        )}
      </div>
    </div>
  );
}
