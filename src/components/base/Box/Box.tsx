import { ReactNode } from 'react';
import styles from './Box.module.css';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  children?: ReactNode;
};

export function Box({ children }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
