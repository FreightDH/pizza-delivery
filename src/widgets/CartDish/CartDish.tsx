import type { FC, ReactElement } from 'react';

import { Divider } from '@/shared/UI/Divider';

import crossIcon from './assets/cross.svg';
import cl from './CartDish.module.scss';

interface CartDishProps {
  dish: [
    string,
    {
      count: number;
      price: number;
      img: string;
    },
  ];
}

export const CartDish: FC<CartDishProps> = ({ dish }): ReactElement => {
  const info = dish[0].split(',');
  const name = info[0];
  const subtitle = `${info[info.length - 1]}, ${info[info.length - 2]}.`;
  const { count, price, img } = dish[1];

  return (
    <>
      <Divider />
      <div className={cl.dish}>
        <div className={cl.dish__info}>
          <div className={cl.dish__image}>
            <img alt="Пепперони" src={img} />
          </div>
          <div className={cl.dish__wrapper}>
            <div className={cl.dish__title}>{name}</div>
            <div className={cl.dish__subtitle}>{subtitle}</div>
          </div>
        </div>
        <div className={cl.dish__count}>
          <button className={cl.count__button}>-</button>
          <span>{count}</span>
          <button className={cl.count__button}>+</button>
        </div>
        <div className={cl.dish__price}>{price} ₽</div>
        <button className={cl.dish__delete}>
          <img alt="cross-icon" src={crossIcon} />
        </button>
      </div>
    </>
  );
};
