import { useEffect } from 'react';

export function useWindowScroll(scrollHandler = () => {}) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', scrollHandler);
    }
    return () => window.removeEventListener('scroll', scrollHandler);
  });
}
