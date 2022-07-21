import { HTMLAttributes } from 'react';
import classnames from 'classnames';
import styles from './Text.module.css';
import { TextProps } from './Text.types';

export function Text<P = HTMLAttributes<HTMLElement>>({
  as: Component = 'span',
  variant = 'm',
  bold,
  ...props
}: TextProps<P>) {
  const boldStyle = bold ? styles['text-bold'] : null;
  return (
    <Component
      className={classnames(styles['text-' + variant], boldStyle)}
      {...props}
    />
  );
}
