import { forwardRef, type ComponentProps, type FC, type ReactElement } from 'react';
import cl from './CustomInput.module.scss';

interface CustomInputProps extends ComponentProps<'input'> {
  label?: string;
  required?: boolean;
}

export const CustomInput: FC<CustomInputProps> = ({
  label = '',
  required = false,
  type = 'text',
  id,
  placeholder,
  value,
  ...props
}): ReactElement => {
  return (
    <div className={cl.wrapper}>
      {label && (
        <label className={cl.label} htmlFor={id}>
          {required ? <span>{label}</span> : label}
        </label>
      )}
      <input className={cl.input} id={id} placeholder={placeholder} type={type} value={value} {...props} />
    </div>
  );
};

export const CustomMaskInput: FC<CustomInputProps> = forwardRef(
  ({ label, required = false, type = 'text', id, placeholder, value, ...props }, ref): ReactElement => {
    return (
      <div className={cl.wrapper}>
        {label && (
          <label className={cl.label} htmlFor={id}>
            {required ? <span>{label}</span> : label}
          </label>
        )}
        <input
          ref={ref}
          className={cl.input}
          id={id}
          placeholder={placeholder}
          type={type}
          value={value}
          {...props}
        />
      </div>
    );
  }
);
