import type { MouseEvent } from 'react';
import { useState, type FC, type ReactElement } from 'react';

import { cn } from '@/shared/lib';
import { usePopup } from '@/shared/lib/contexts/PopupContext';
import { CustomButton } from '@/shared/UI/CustomButton';

import { leafIcon, pepperIcon } from '../assets';
import cl from './Pizza.module.scss';

interface PizzaProps {
  pizza: Pizza;
}

export const Pizza: FC<PizzaProps> = ({ pizza }): ReactElement => {
  const { img, name, price, isVegan = false, isHot = false } = pizza;
  const [size, setSize] = useState('30 см');
  const [dough, setDough] = useState('тонкое');
  const { openDishCard } = usePopup();

  const handleControlsClick = (e: MouseEvent<HTMLButtonElement>, type: 'dought' | 'size') => {
    const { textContent } = e.target as HTMLElement;

    if (type === 'dought') {
      setDough(textContent!);
    } else {
      setSize(textContent!);
    }
  };

  return (
    <div className={cl.pizza}>
      <div className={cl.pizza__image} onClick={() => openDishCard(pizza)}>
        <img alt={name} src={img} />
        <div className={cl.pizza__icon}>
          {isVegan && <img alt="leaf-icon" src={leafIcon} />}
          {isHot && <img alt="pepper-icon" src={pepperIcon} />}
        </div>
      </div>
      <div className={cl.pizza__name}>{name}</div>
      <div className={cl.pizza__controls}>
        <div className={cl.controls__row}>
          <button
            className={cn(cl.controls__item, { [cl.active]: dough === 'тонкое' })}
            onClick={(e) => handleControlsClick(e, 'dought')}
          >
            тонкое
          </button>
          <button
            className={cn(cl.controls__item, { [cl.active]: dough === 'традиционное' })}
            onClick={(e) => handleControlsClick(e, 'dought')}
          >
            традиционное
          </button>
        </div>
        <div className={cl.controls__row}>
          <button
            className={cn(cl.controls__item, { [cl.active]: size === '30 см' })}
            onClick={(e) => handleControlsClick(e, 'size')}
          >
            30 см
          </button>
          <button
            className={cn(cl.controls__item, { [cl.active]: size === '40 см' })}
            onClick={(e) => handleControlsClick(e, 'size')}
          >
            40 см
          </button>
        </div>
      </div>
      <div className={cl.pizza__footer}>
        <div className={cl.pizza__price}>{size === '30 см' ? price[0] : price[1]} ₽</div>
        <CustomButton className={cl.pizza__btn}>+ Добавить</CustomButton>
      </div>
    </div>
  );
};
