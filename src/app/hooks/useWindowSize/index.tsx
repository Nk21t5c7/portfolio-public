'use client';
import React from 'react';

const useWindowSize = () => {
  const [width, setWidth] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (typeof window === 'undefined') return; // 重要
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

export default useWindowSize;