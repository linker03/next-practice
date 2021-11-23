import { useState } from 'react';
import { useWindowScroll } from './use-window-scroll';

export function usePageTop() {
  const [visible, setVisible] = useState(false);

  useWindowScroll(() => {
    if (!visible && window.scrollY > window.innerHeight) {
      setVisible(true);
    }

    if (visible && window.scrollY < window.innerHeight) {
      setVisible(false);
    }
  });

  return visible;
}
