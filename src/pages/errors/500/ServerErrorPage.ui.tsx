import type { FC, ReactElement } from 'react';

import cl from './ServerErrorPage.module.scss';

export const ServerErrorPage: FC = (): ReactElement => {
  return (
    <main className={cl.page}>
      <div className="page__container">
        <div className={cl.page__body}>
          <h1 className={cl.page__title}>500</h1>
          <p className={cl.page__description}>
            Внутренняя ошибка сервера! <br />
            <span>
              Мы уже работаем над проблемой. <br /> Попробуйте перезагрузить страницу или зайдите позже.
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};
