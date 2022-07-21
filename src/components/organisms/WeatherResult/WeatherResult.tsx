import { useState } from 'react';
import { TemperatureUnit } from '@/types';
import { WeatherHeader, WeatherResultCard } from '@/components/molecules';
import styles from './WeatherResult.module.css';
import { WeatherResultsProps } from './WeatherResults.types';

export function WeatherResult({ weather, location }: WeatherResultsProps) {
  const [selectedUnits, setSelectedUnits] =
    useState<TemperatureUnit>('celcius');

  return (
    <div className={styles.container}>
      <WeatherHeader location={location} setSelectedUnits={setSelectedUnits} />
      <WeatherResultCard
        weather={weather}
        location={location}
        selectedUnits={selectedUnits}
      />
    </div>
  );
}
