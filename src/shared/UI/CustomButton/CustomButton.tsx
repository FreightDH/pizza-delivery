import type { ComponentProps, FC, ReactElement } from 'react';

import cl from './CustomButton.module.scss';
import { cn } from '@/shared/lib';

interface CustomButtonProps extends ComponentProps<'button'> {
  primary?: boolean;
}

export const CustomButton: FC<CustomButtonProps> = ({ primary = false, children }): ReactElement => {
  return <button className={cn(cl.btn, { [cl.primary]: primary })}>{children}</button>;
};
