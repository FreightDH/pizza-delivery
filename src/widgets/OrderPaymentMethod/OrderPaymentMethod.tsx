import type { Dispatch, FC, ReactElement, SetStateAction } from 'react';

import { PaymentType } from './UI/PaymentType';

import cl from './OrderPaymentMethod.module.scss';

interface OrderPaymentMethodProps {
  paymentMethod: string;
  setPaymentMethod: Dispatch<SetStateAction<string>>;
}

export const OrderPaymentMethod: FC<OrderPaymentMethodProps> = ({
  paymentMethod,
  setPaymentMethod,
}): ReactElement => {
  return (
    <div className={cl.payment}>
      <div className={cl.payment__title}>Выберите способ оплаты</div>
      <PaymentType
        id="cardOnline"
        label="Картой на сайте"
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
      <PaymentType
        id="cardToCourier"
        label="Картой курьеру"
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
      <PaymentType
        id="cashToCourier"
        label="Наличными курьеру"
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
    </div>
  );
};
