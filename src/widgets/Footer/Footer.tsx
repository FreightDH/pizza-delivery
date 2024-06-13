import type { FC, ReactElement } from 'react';

import slogan from './assets/slogan.png';

import cl from './Footer.module.scss';

export const Footer: FC = (): ReactElement => {
  return (
    <footer className={cl.footer}>
      <div className="footer__container">
        <div className={cl.footer__body}>
          <div className={cl.footer__column}>
            <img alt="slogan" src={slogan} />
          </div>
          <div className={cl.footer__column}>
            <p>Доставляем быстро, безопасно и качественно.</p>
            <p className={cl.footer__text}>
              Заказать можно не только пиццу, но и другие блюда из разнообразного меню. А ещё у нас есть
              правило, если курьер не успевает доставить заказ в указанный срок — пицца в подарок! Где бы вы
              ни были «Pizza Delivery» — накормит.
            </p>
          </div>
          <div className={cl.footer__column}>
            <p>Только живое тесто и свежие ингредиенты.</p>
            <p className={cl.footer__text}>
              Вкус нашей пиццы определяет качество продуктов, которое остается неизменно высоким. Пицца
              готовится по специальной рецептуре из живого теста. Мы используем исключительно натуральные и
              свежие ингредиенты для всех блюд из меню и готовим из-под ножа, поэтому вы можете быть уверены
              не только во вкусе, но и качестве.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
