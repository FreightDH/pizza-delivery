import type { ComponentProps, FC, ReactElement } from 'react';
import cl from './CustomTextarea.module.scss';

export const CustomTextarea: FC<ComponentProps<'textarea'>> = ({
  value,
  onChange,
  ...props
}): ReactElement => {
  return <textarea className={cl.textarea} value={value} onChange={onChange} {...props} />;
};
