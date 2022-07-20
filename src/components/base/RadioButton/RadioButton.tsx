import styles from './RadioButton.module.css';
import { RadioButtonProps } from './RadioButton.types';

export function RadioButton({
  label,
  name,
  value,
  onChange,
}: RadioButtonProps) {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="radio"
        value={value}
        name={name}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
      <label className="form-check-label inline-block text-gray-800">
        {label}
      </label>
    </div>
  );
}
