import React from 'react';

import styles from './Card.css';

export interface CardProps {
  prop?: string;
}

export function Card({prop = 'default value'}: CardProps) {
  return <div className={styles.Card}>Card {prop}</div>;
}
