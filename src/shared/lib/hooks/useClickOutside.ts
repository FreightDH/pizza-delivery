import type { RefObject } from 'react';
import { useEffect } from 'react';

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  dependenciesArray: RefObject<HTMLElement>[],
  onClickOutside: () => void
) => {
  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      let flag = false;

      dependenciesArray.forEach((dep) => {
        if (dep.current?.contains(target as Node)) flag = true;
      });

      if (flag) return;

      if (ref.current && !ref.current.contains(target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClickOutside, dependenciesArray]);
};
