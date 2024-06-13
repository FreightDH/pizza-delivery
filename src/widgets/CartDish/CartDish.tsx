import type { FC, ReactElement } from 'react';

import { useAppDispatch } from '@/shared/lib';
import { decrementDish, incrementDish, removeDish } from '@/entities/order';
import { Divider } from '@/shared/UI/Divider';

import crossIcon from './assets/cross.svg';
import cl from './CartDish.module.scss';

interface CartDishProps {
  dishInfo: [
    string,
    {
      count: number;
      price: number;
      img: string;
    },
  ];
}

export const CartDish: FC<CartDishProps> = ({ dishInfo }): ReactElement => {
  const dispatch = useAppDispatch();

  const dish = dishInfo[0];
  const { count, price, img } = dishInfo[1];

  const dishParams = dishInfo[0].split(',');
  const name = dishParams[0];
  const subtitle = `${dishParams[dishParams.length - 1]}, ${dishParams[dishParams.length - 2]}.`;

  const handleDecrement = () => {
    if (count === 1) {
      dispatch(removeDish({ dish }));
      return;
    }

    dispatch(decrementDish({ dish }));
  };

  return (
    <div>
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
          <button className={cl.count__button} onClick={handleDecrement}>
            -
          </button>
          <span>{count}</span>
          <button className={cl.count__button} onClick={() => dispatch(incrementDish({ dish }))}>
            +
          </button>
        </div>
        <div className={cl.dish__price}>{price} ₽</div>
        <button className={cl.dish__delete} onClick={() => dispatch(removeDish({ dish }))}>
          <img alt="cross-icon" src={crossIcon} />
        </button>
      </div>
    </div>
  );
};
