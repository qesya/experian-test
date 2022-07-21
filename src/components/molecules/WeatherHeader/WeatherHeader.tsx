import { displayDate } from '@/utils/displayDate';
import { RadioButton, Text } from '@/components/atoms';
import styles from './WeatherHeader.module.css';
import { WeatherHeaderProps } from './WeatherHeader.types';

export function WeatherHeader({
  setSelectedUnits,
  location,
}: WeatherHeaderProps) {
  return (
    <div className={styles.localWrapper}>
      <Text>{displayDate(location.localtime_epoch)}</Text>
      <form className={styles.radioWrapper}>
        <RadioButton
          name="units"
          label="celcius"
          value="celcius"
          onChange={() => setSelectedUnits('celcius')}
          defaultChecked
          checked
        />
        <RadioButton
          name="units"
          label="fahrenheit"
          value="fahrenheit"
          onChange={() => setSelectedUnits('fahrenheit')}
        />
      </form>
    </div>
  );
}
