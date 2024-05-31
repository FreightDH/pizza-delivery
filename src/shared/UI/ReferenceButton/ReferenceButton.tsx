import type { FC, ReactElement } from 'react';

import cl from './ReferenceButton.module.scss';
import { usePopup } from '@/shared/lib/contexts/PopupContext';

export const ReferenceButton: FC = (): ReactElement => {
  const { openCard, setReferenceCardOpen } = usePopup();

  return (
    <button className={cl.reference} onClick={() => openCard(setReferenceCardOpen)}>
      ?
    </button>
  );
};
