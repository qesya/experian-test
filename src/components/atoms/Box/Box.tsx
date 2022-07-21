import styles from './Box.module.css';
import { BoxProps } from './Box.types';

export function Box({ children }: BoxProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
