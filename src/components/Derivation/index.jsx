import React from 'react';
import styles from './styles.module.css';

export default function Derivation({ title = 'Derivation', children }) {
  return (
    <details className={styles.derivation}>
      <summary className={styles.summary}>
        <span className={styles.icon}>≡</span>
        <span className={styles.label}>{title}</span>
        <span className={styles.chevron}>&#9654;</span>
      </summary>
      <div className={styles.content}>
        {children}
      </div>
    </details>
  );
}
