import type { ChangeEvent, MouseEvent } from 'react';
import { useState, type FC, type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMask } from '@react-input/mask';

import { getFormatDate, useAppDispatch, useAppSelector } from '@/shared/lib';
import { resetOrder } from '@/entities/order';
import { addOrderToHistory } from '@/entities/user';

import { CustomInput, CustomMaskInput } from '@/shared/UI/CustomInput';
import { CustomButton } from '@/shared/UI/CustomButton';
import { CustomTextarea } from '@/shared/UI/CustomTextarea';
import { OrderPaymentMethod } from '@/widgets/OrderPaymentMethod';

import arrowIcon from './assets/arrow.svg';
import cl from './OrderPlacementPage.module.scss';

type OrderField =
  | 'name'
  | 'phone'
  | 'city'
  | 'street'
  | 'house'
  | 'flat'
  | 'entrance'
  | 'floor'
  | 'commentary';

export const OrderPlacementPage: FC = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const order = useAppSelector((state) => state.orderReducer.order);

  const [orderData, setOrderData] = useState({
    name: '',
    phone: '',
    city: 'Санкт-Петербург',
    street: '',
    house: '',
    flat: '',
    entrance: '',
    floor: '',
    commentary: '',
  });

  const phoneInputRef = useMask({ mask: '+7 (___) ___-__-__', replacement: { _: /\d/ } });
  const [paymentMethod, setPaymentMethod] = useState('Картой на сайте');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: OrderField) => {
    const { value } = e.target;
    setOrderData({ ...orderData, [field]: value });
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const date = new Date();
    const formatDate = getFormatDate(date);

    for (const field in orderData) {
      if (!orderData[field as OrderField].trim()) {
        alert('Не все поля заполнены корректно!');
        return;
      }
    }

    dispatch(addOrderToHistory({ order: { ...order, date: formatDate } }));
    dispatch(resetOrder());
    navigate('/cart/success');
  };

  return (
    <main className={cl.page}>
      <div className={cl.page__container}>
        <div className={cl.page__body}>
          <h1 className={cl.page__title}>Оформление заказа</h1>
          <form className={cl.page__form}>
            <div className={cl.form__row}>
              <CustomInput
                required
                placeholder="Имя"
                value={orderData.name}
                onChange={(e) => handleChange(e, 'name')}
              />
              <CustomMaskInput
                ref={phoneInputRef}
                required
                placeholder="Телефон"
                value={orderData.phone}
                onChange={(e) => handleChange(e, 'phone')}
              />
            </div>
            <div className={cl.form__row}>
              <CustomInput
                required
                placeholder="Город"
                value={orderData.city}
                onChange={(e) => handleChange(e, 'city')}
              />
              <CustomInput
                required
                placeholder="Улица"
                value={orderData.street}
                onChange={(e) => handleChange(e, 'street')}
              />
            </div>
            <div className={cl.form__row}>
              <div className={cl.form__wrapper}>
                <CustomInput
                  required
                  placeholder="Дом"
                  value={orderData.house}
                  onChange={(e) => handleChange(e, 'house')}
                />
                <CustomInput
                  required
                  placeholder="Квартира"
                  value={orderData.flat}
                  onChange={(e) => handleChange(e, 'flat')}
                />
              </div>
              <div className={cl.form__wrapper}>
                <CustomInput
                  placeholder="Подъезд"
                  value={orderData.entrance}
                  onChange={(e) => handleChange(e, 'entrance')}
                />
                <CustomInput
                  placeholder="Этаж"
                  value={orderData.floor}
                  onChange={(e) => handleChange(e, 'floor')}
                />
              </div>
            </div>
            <CustomTextarea
              placeholder="Комментарий (необязательно)"
              value={orderData.commentary}
              onChange={(e) => handleChange(e, 'commentary')}
            />
            <OrderPaymentMethod paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
            <div className={cl.form__buttons}>
              <CustomButton black type="button" onClick={() => navigate('/cart')}>
                <img alt="arrow-icon" src={arrowIcon} />
                Вернуться назад
              </CustomButton>
              <CustomButton primary onClick={handleSubmit}>
                Оформить заказ за {order.sum} ₽
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
