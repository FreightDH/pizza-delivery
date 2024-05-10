import { useEffect, useState } from 'react';

const breakpoints = {
  0: 'xs',
  635: 'sm',
  960: 'md',
  1280: 'lg',
  1920: 'xl',
};

type WindowSize = {
  width: number;
  height: number | undefined;
};

export const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = useState('');
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 1920,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    if (0 < windowSize.width && windowSize.width < 635) {
      setBreakPoint(breakpoints[0]);
    }
    if (635 < windowSize.width && windowSize.width < 960) {
      setBreakPoint(breakpoints[635]);
    }
    if (960 < windowSize.width && windowSize.width < 1280) {
      setBreakPoint(breakpoints[960]);
    }
    if (1280 < windowSize.width && windowSize.width < 1920) {
      setBreakPoint(breakpoints[1280]);
    }
    if (windowSize.width >= 1920) {
      setBreakPoint(breakpoints[1920]);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize.width]);

  return breakpoint;
};
