import type { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import cartIcon from './assets/cart.svg';
import cl from './CartButton.module.scss';

export const CartButton: FC = (): ReactElement => {
  return (
    <Link className={cl.cart} to="/cart">
      <img alt="cart-icon" src={cartIcon} />
    </Link>
  );
};
