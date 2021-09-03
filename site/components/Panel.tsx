import React, { FC } from 'react';
import styles from 'styles/components.module.scss';

export interface PanelProps {}

export const Panel: FC<PanelProps> = ({ children }) => {
  return <div className={styles['panel']}>{children}</div>;
};
