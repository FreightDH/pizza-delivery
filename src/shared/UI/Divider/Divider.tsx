import type { FC, ReactElement } from 'react';
import cl from './Divider.module.scss';

export const Divider: FC = (): ReactElement => {
  return <div className={cl.divider}></div>;
};
