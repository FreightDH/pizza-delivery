import type { ChangeEvent, Dispatch, FC, ReactElement, SetStateAction } from 'react';

import { cn } from '@/shared/lib';

import creditCardIcon from './assets/credit-card.svg';
import cl from './PaymentType.module.scss';

interface PaymentTypeProps {
  label: string;
  id: string;
  paymentMethod: string;
  setPaymentMethod: Dispatch<SetStateAction<string>>;
}

export const PaymentType: FC<PaymentTypeProps> = ({
  label,
  id,
  paymentMethod,
  setPaymentMethod,
}): ReactElement => {
  const handlePaymentMethod = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPaymentMethod(value);
  };

  return (
    <label className={cn(cl.type, { [cl.active]: paymentMethod === label })} htmlFor={id}>
      <img alt="credit-card-icon" src={creditCardIcon} />
      {label}
      <input
        checked={paymentMethod === label}
        id={id}
        type="radio"
        value={label}
        onChange={handlePaymentMethod}
      />
    </label>
  );
};
