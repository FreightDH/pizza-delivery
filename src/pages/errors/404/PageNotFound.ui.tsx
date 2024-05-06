import type { FC, ReactElement } from 'react';

import { CustomButton } from '@/shared/UI/CustomButton';

import cl from './PageNotFound.module.scss';

export const PageNotFound: FC = (): ReactElement => {
  return (
    <main className={cl.page}>
      <div className="page__container">
        <div className={cl.page__body}>
          <h1 className={cl.page__title}>404</h1>
          <p className={cl.page__description}>
            Похоже такой страницы не существует! <span>Вернитесь на главную и попробуйте еще раз.</span>
          </p>
          <CustomButton black to="/">
            Вернуться на главную
          </CustomButton>
        </div>
      </div>
    </main>
  );
};
