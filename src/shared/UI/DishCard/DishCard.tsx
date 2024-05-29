import { useState, type FC, type ReactElement } from 'react';

import { useAppDispatch } from '@/shared/lib';
import { usePopup } from '@/shared/lib/contexts/PopupContext';

import { addDish } from '@/entities/order/orderSlice';

import { CustomButton } from '../CustomButton';
import { Popup } from '../Popup';

import cl from './DishCard.module.scss';

export const DishCard: FC = (): ReactElement => {
  const [size, setSize] = useState('30 см');
  const [dough, setDough] = useState('Традиционное');
  const { dishDetails, closeCard } = usePopup();
  const { img, name, price, description, weight } = dishDetails as Pizza;
  const dispatch = useAppDispatch();

  const handleAddClick = () => {
    const dish = `${name} ${size}, ${dough}`;
    const finalPrice = size === '30 см' ? price[0] : price[1];

    dispatch(addDish({ dish, price: finalPrice }));
    closeCard();
  };

  return (
    <Popup>
      <div className={cl.card}>
        <div className={cl.card__image}>
          <img alt={name} src={img} />
        </div>
        <div className={cl.card__body}>
          <h3 className={cl.card__title}>{name}</h3>
          <p className={cl.card__description}>{description}</p>
          <p className={cl.card__extra}>
            {size}. {dough.toLowerCase()}, {weight} г.
          </p>
          <div className={cl.card__selectors}>
            <div className={cl.selectors__item}>
              <input checked={size === '30 см'} id="size30" type="radio" onChange={() => setSize('30 см')} />
              <label className={cl.selectors__option} htmlFor="size30">
                30 см
              </label>
              <input checked={size === '40 см'} id="size40" type="radio" onChange={() => setSize('40 см')} />
              <label className={cl.selectors__option} htmlFor="size40">
                40 см
              </label>
              <span className={cl.selectors__glider}></span>
            </div>
            <div className={cl.selectors__item}>
              <input
                checked={dough === 'Традиционное'}
                id="doughTraditional"
                type="radio"
                onChange={() => setDough('Традиционное')}
              />
              <label className={cl.selectors__option} htmlFor="doughTraditional">
                Традиционное
              </label>
              <input
                checked={dough === 'Тонкое'}
                id="doughThin"
                type="radio"
                onChange={() => setDough('Тонкое')}
              />
              <label className={cl.selectors__option} htmlFor="doughThin">
                Тонкое
              </label>
              <span className={cl.selectors__glider}></span>
            </div>
          </div>

          <CustomButton onClick={handleAddClick}>
            Добавить в корзину за {size === '30 см' ? price[0] : price[1]} ₽
          </CustomButton>
        </div>
      </div>
    </Popup>
  );
};
