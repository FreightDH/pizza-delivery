import type { FC, ReactElement } from 'react';

import { CustomButton } from '@/shared/UI/CustomButton';

import { leafIcon, pepperIcon } from '../assets';
import cl from './DishMobile.module.scss';

interface DishMobileProps {
  img: string;
  name: string;
  description: string;
  price: number[];
  isVegan?: boolean;
  isHot?: boolean;
}

export const DishMobile: FC<DishMobileProps> = ({
  img,
  name,
  description,
  price,
  isVegan = false,
  isHot = false,
}): ReactElement => {
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
      <div className={cl.dish__description}>{description}</div>
      <div className={cl.dish__footer}>
        <div className={cl.dish__price}>{`от ${price[0]} ₽`}</div>
        <CustomButton className={cl.dish__btn}>Выбрать</CustomButton>
      </div>
    </div>
  );
};
