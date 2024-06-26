import type { FC, ReactElement } from 'react';

import { cn, useAppDispatch } from '@/shared/lib';
import { useControls } from '@/shared/lib/contexts/ControlsContext';

import cl from './Dropdown.module.scss';
import { handleSort } from '@/entities/dishes';

interface DropdownProps {
  sortOptions: string[];
}

export const Dropdown: FC<DropdownProps> = ({ sortOptions }): ReactElement => {
  const dispatch = useAppDispatch();
  const { isDropdownOpen, setDropdownOpen, dropdownRef, activeSort, setActiveSort } = useControls();

  const handleClick = (option: string) => {
    setActiveSort(option);
    dispatch(handleSort({ query: option }));
    setDropdownOpen(false);
  };

  return (
    <div ref={dropdownRef} className={cn(cl.dropdown, { [cl.open]: isDropdownOpen })}>
      <div className={cl.dropdown__body}>
        {sortOptions.map((option) => (
          <div
            key={option}
            className={cn(cl.dropdown__option, { [cl.active]: activeSort === option })}
            onClick={() => handleClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
