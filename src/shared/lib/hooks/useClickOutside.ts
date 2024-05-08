import type { RefObject } from 'react';
import { useEffect } from 'react';

export const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  toggleRef: RefObject<HTMLSpanElement>,
  onClickOutside: () => void
) => {
  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(target as Node) &&
        !toggleRef.current?.contains(target as Node)
      ) {
        onClickOutside();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClickOutside, toggleRef]);
};
