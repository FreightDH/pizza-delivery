import type { ComponentProps, FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { cn } from '@/shared/lib';

import cl from './CustomButton.module.scss';

interface CustomButtonProps extends ComponentProps<'button'> {
  primary?: boolean;
  black?: boolean;
  to?: string;
}

export const CustomButton: FC<CustomButtonProps> = ({
  primary = false,
  black = false,
  to = '',
  children,
}): ReactElement => {
  if (to) {
    return (
      <Link to={to}>
        <button className={cn(cl.btn, { [cl.primary]: primary, [cl.black]: black })}>{children}</button>
      </Link>
    );
  }

  return <button className={cn(cl.btn, { [cl.primary]: primary, [cl.black]: black })}>{children}</button>;
};
