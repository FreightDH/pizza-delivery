import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useState, type FC, type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMask } from '@react-input/mask';

import { cn, useAppSelector } from '@/shared/lib';

import { CustomInput, CustomMaskInput } from '@/shared/UI/CustomInput';
import { CustomButton } from '@/shared/UI/CustomButton';
import { CustomTextarea } from '@/shared/UI/CustomTextarea';

import { arrowIcon, creditCardIcon } from './assets';
import cl from './OrderPlacementPage.module.scss';

interface OrderPlacementPageProps {}

export const OrderPlacementPage: FC<OrderPlacementPageProps> = (): ReactElement => {
  const navigate = useNavigate();
  const order = useAppSelector((state) => state.orderReducer.order);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const phoneInputRef = useMask({ mask: '+7 (___) ___-__-__', replacement: { _: /\d/ } });
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');
  const [flat, setFlat] = useState('');
  const [entrance, setEntrance] = useState('');
  const [floor, setFloor] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Картой на сайте');
  const [commentary, setCommentary] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setValue: Dispatch<SetStateAction<string>>
  ) => {
    const { value } = e.target;
    setValue(value);
  };

  const handlePaymentMethod = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPaymentMethod(value);
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
                value={name}
                onChange={(e) => handleChange(e, setName)}
              />
              <CustomMaskInput
                ref={phoneInputRef}
                required
                placeholder="Телефон"
                value={phone}
                onChange={(e) => handleChange(e, setPhone)}
              />
            </div>
            <div className={cl.form__row}>
              <CustomInput
                required
                placeholder="Город"
                value={city}
                onChange={(e) => handleChange(e, setCity)}
              />
              <CustomInput
                required
                placeholder="Улица"
                value={street}
                onChange={(e) => handleChange(e, setStreet)}
              />
            </div>
            <div className={cl.form__row}>
              <div className={cl.form__wrapper}>
                <CustomInput
                  required
                  placeholder="Дом"
                  style={{ maxWidth: '190px' }}
                  value={house}
                  onChange={(e) => handleChange(e, setHouse)}
                />
                <CustomInput
                  required
                  placeholder="Квартира"
                  style={{ maxWidth: '190px' }}
                  value={flat}
                  onChange={(e) => handleChange(e, setFlat)}
                />
              </div>
              <div className={cl.form__wrapper}>
                <CustomInput
                  required
                  placeholder="Подъезд"
                  style={{ maxWidth: '190px' }}
                  value={entrance}
                  onChange={(e) => handleChange(e, setEntrance)}
                />
                <CustomInput
                  required
                  placeholder="Этаж"
                  style={{ maxWidth: '190px' }}
                  value={floor}
                  onChange={(e) => handleChange(e, setFloor)}
                />
              </div>
            </div>
            <CustomTextarea
              placeholder="Комментарий (необязательно)"
              value={commentary}
              onChange={(e) => handleChange(e, setCommentary)}
            />
            <div className={cl.form__payment}>
              <div className={cl.payment__title}>Выберите способ оплаты</div>
              <label
                className={cn(cl.payment__label, { [cl.active]: paymentMethod === 'Картой на сайте' })}
                htmlFor="cardOnline"
              >
                <img alt="credit-card-icon" src={creditCardIcon} />
                Картой на сайте
                <input
                  checked={paymentMethod === 'Картой на сайте'}
                  id="cardOnline"
                  type="radio"
                  value="Картой на сайте"
                  onChange={handlePaymentMethod}
                />
              </label>
              <label
                className={cn(cl.payment__label, { [cl.active]: paymentMethod === 'Картой курьеру' })}
                htmlFor="cardToCourier"
              >
                <img alt="credit-card-icon" src={creditCardIcon} />
                Картой курьеру
                <input
                  checked={paymentMethod === 'Картой курьеру'}
                  id="cardToCourier"
                  type="radio"
                  value="Картой курьеру"
                  onChange={handlePaymentMethod}
                />
              </label>
              <label
                className={cn(cl.payment__label, { [cl.active]: paymentMethod === 'Наличными курьеру' })}
                htmlFor="cashToCourier"
              >
                <img alt="credit-card-icon" src={creditCardIcon} />
                Наличными курьеру
                <input
                  checked={paymentMethod === 'Наличными курьеру'}
                  id="cashToCourier"
                  type="radio"
                  value="Наличными курьеру"
                  onChange={handlePaymentMethod}
                />
              </label>
            </div>
            <div className={cl.form__buttons}>
              <CustomButton black onClick={() => navigate(-1)}>
                <img alt="arrow-icon" src={arrowIcon} />
                Вернуться назад
              </CustomButton>
              <CustomButton primary>Оформить заказ за {order.sum} ₽</CustomButton>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
