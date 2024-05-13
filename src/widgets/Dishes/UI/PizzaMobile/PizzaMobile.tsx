import type { FC, ReactElement } from 'react';

import { CustomButton } from '@/shared/UI/CustomButton';

import { leafIcon, pepperIcon } from '../assets';
import cl from './PizzaMobile.module.scss';

interface PizzaMobileProps {
  pizza: Pizza;
}

export const PizzaMobile: FC<PizzaMobileProps> = ({ pizza }): ReactElement => {
  const { img, name, description, price, isVegan = false, isHot = false } = pizza;

  return (
    <div className={cl.pizza}>
      <div className={cl.pizza__image}>
        <img alt={name} src={img} />
        <div className={cl.pizza__icon}>
          {isVegan && <img alt="leaf-icon" src={leafIcon} />}
          {isHot && <img alt="pepper-icon" src={pepperIcon} />}
        </div>
      </div>
      <div className={cl.pizza__name}>{name}</div>
      <div className={cl.pizza__description}>{description}</div>
      <div className={cl.pizza__footer}>
        <div className={cl.pizza__price}>{`от ${price[0]} ₽`}</div>
        <CustomButton className={cl.pizza__btn}>Выбрать</CustomButton>
      </div>
    </div>
  );
};
