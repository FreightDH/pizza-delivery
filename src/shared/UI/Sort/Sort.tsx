import { type FC, type ReactElement } from 'react';

import { cn } from '@/shared/lib';
import { useControls } from '@/shared/lib/contexts/ControlsContext';

import { Dropdown } from './UI';
import arrowIcon from './assets/arrow.svg';
import cl from './Sort.module.scss';

interface SortProps {
  sortOptions: string[];
}

export const Sort: FC<SortProps> = ({ sortOptions }): ReactElement => {
  const { activeSort, isDropdownOpen, setDropdownOpen, toggleDropdownRef } = useControls();

  return (
    <div className={cl.sort}>
      <div className={cl.sort__body}>
        <img alt="arrow-icon" className={cn('', { [cl.open]: isDropdownOpen })} src={arrowIcon} />
        <div>
          Сортировка по{' '}
          <span ref={toggleDropdownRef} onClick={() => setDropdownOpen(!isDropdownOpen)}>
            {activeSort}
          </span>
        </div>
        <Dropdown sortOptions={sortOptions} />
      </div>
    </div>
  );
};
