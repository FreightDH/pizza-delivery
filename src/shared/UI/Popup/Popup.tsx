import type { FC, ReactElement, ReactNode } from 'react';

import { usePopup } from '@/shared/lib/contexts/PopupContext';

import closeIcon from './assets/close.svg';
import cl from './Popup.module.scss';

interface PopupProps {
  children: ReactNode;
}

export const Popup: FC<PopupProps> = ({ children }): ReactElement => {
  const { popupRef, closeDishCard } = usePopup();

  return (
    <div className={cl.popup}>
      <div className={cl.popup__body}>
        <div ref={popupRef} className={cl.popup__content}>
          <button className={cl.popup__close} onClick={closeDishCard}>
            <img alt="close-icon" src={closeIcon} />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};
