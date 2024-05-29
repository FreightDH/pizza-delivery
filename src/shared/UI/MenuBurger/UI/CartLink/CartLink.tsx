import type { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { cn, useAppSelector, useBreakpoint } from '@/shared/lib';
import { useControls } from '@/shared/lib/contexts/ControlsContext';
import { CustomButton } from '@/shared/UI/CustomButton';

import { cartBlackIcon, cartIcon } from '../../assets';
import cl from './CartLink.module.scss';

export const CartLink: FC = (): ReactElement => {
  const { isMenuOpen, setMenuOpen } = useControls();
  const breakpoint = useBreakpoint();
  const order = useAppSelector((state) => state.orderReducer.order);

  return (
    <Link
      className={cn(cl.cart, { [cl.menuOpen]: isMenuOpen })}
      to="/cart"
      onClick={() => setMenuOpen(false)}
    >
      {isMenuOpen && breakpoint === 'xs' ? (
        <>
          <img alt="cart-icon" src={cartBlackIcon} />
          <span>Корзина</span>
        </>
      ) : (
        <CustomButton primary>
          <div className={cl.button__body}>
            <div>{order.sum} ₽</div>
            <div className={cl.button__divider}></div>
            <div className={cl.button__count}>
              <img alt="cart-icon" src={cartIcon} />
              <span>{order.dishesCount}</span>
            </div>
          </div>
        </CustomButton>
      )}
    </Link>
  );
};
