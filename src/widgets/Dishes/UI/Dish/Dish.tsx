import type { MouseEvent } from 'react';
import { useState, type FC, type ReactElement } from 'react';

import { cn } from '@/shared/lib';
import { CustomButton } from '@/shared/UI/CustomButton';

import { leafIcon, pepperIcon } from './assets';
import cl from './Dish.module.scss';

interface DishProps {
  img: string;
  name: string;
  price: number[];
  isVegan?: boolean;
  isHot?: boolean;
}

export const Dish: FC<DishProps> = ({ img, name, price, isVegan = false, isHot = false }): ReactElement => {
  const [size, setSize] = useState('30 см');
  const [dough, setDough] = useState('тонкое');

  const handleClick = (e: MouseEvent<HTMLDivElement>, type: 'dought' | 'size') => {
    const { textContent } = e.target as HTMLElement;

    if (type === 'dought') {
      setDough(textContent!);
    } else {
      setSize(textContent!);
    }
  };

  return (
    <div className={cl.dish}>
      <div className={cl.dish__image}>
        <img alt={name} src={img} />
        <div className={cl.dish__icon}>
          {isVegan && <img alt="leaf-icon" src={leafIcon} />}
          {isHot && <img alt="pepper-icon" src={pepperIcon} />}
        </div>
      </div>
      <div className={cl.dish__name}>{name}</div>
      <div className={cl.dish__controls}>
        <div className={cl.controls__row}>
          <div
            className={cn(cl.controls__item, { [cl.active]: dough === 'тонкое' })}
            onClick={(e) => handleClick(e, 'dought')}
          >
            тонкое
          </div>
          <div
            className={cn(cl.controls__item, { [cl.active]: dough === 'традиционное' })}
            onClick={(e) => handleClick(e, 'dought')}
          >
            традиционное
          </div>
        </div>
        <div className={cl.controls__row}>
          <div
            className={cn(cl.controls__item, { [cl.active]: size === '30 см' })}
            onClick={(e) => handleClick(e, 'size')}
          >
            30 см
          </div>
          <div
            className={cn(cl.controls__item, { [cl.active]: size === '40 см' })}
            onClick={(e) => handleClick(e, 'size')}
          >
            40 см
          </div>
        </div>
      </div>
      <div className={cl.dish__footer}>
        <div className={cl.dish__price}>{size === '30 см' ? price[0] : price[1]} ₽</div>
        <CustomButton className={cl.dish__btn}>+ Добавить</CustomButton>
      </div>
    </div>
  );
};
