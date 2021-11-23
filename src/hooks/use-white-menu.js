import { useState } from 'react';
import { useWindowScroll } from './use-window-scroll';

export function useWhiteMenu(initialState = true) {
  const [whiteMenu, setWhiteMenu] = useState(initialState);

  useWindowScroll(() => {
    setWhiteMenu(window.scrollY === 0);
  });

  return whiteMenu;
}
