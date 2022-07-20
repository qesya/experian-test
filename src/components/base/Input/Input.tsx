import React from 'react';
import styles from './Input.module.css';
import { InputProps } from './Input.types';

export function Input({ ...props }: InputProps) {
  return <input className={styles.input} {...props} />;
}
