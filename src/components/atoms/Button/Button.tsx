import classnames from 'classnames';
import { Text } from '../Text/Text';
import styles from './Button.module.css';
import { ButtonProps } from './Button.types';

export function Button({
  title,
  variant = 'primary',
  size = 'md',
  rounded = 'md',
  onClick,
  ...props
}: ButtonProps) {
  const action = variant !== 'disabled' ? onClick : () => null;
  return (
    <button
      onClick={action}
      disabled={variant === 'disabled'}
      className={classnames(
        styles.button,
        styles['button-' + variant],
        styles['button-size-' + size],
        styles['button-rounded-' + rounded]
      )}
      {...props}>
      <Text variant="l">{title}</Text>
    </button>
  );
}
