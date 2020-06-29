import React, { ButtonHTMLAttributes } from 'react';

import styles from './button.module.scss';

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={styles.button}
    {...props}
  >
    {props.children}
  </button>
);
