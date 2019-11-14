import { useState, useEffect } from 'react';

export const useScroll = () => {
  // Set initial scroll states
  const [scroll, setScroll] = useState({
    x: window.scrollX,
    y: -window.scrollY,
    direction: 'none'
  });

  const listener = e => {
    setScroll(prev => ({
      x: window.scrollX,
      y: -window.scrollY,

      // Compares the previous state's `y` position
      // to the current `y` position to get the scroll direction
      direction: prev.y > -window.scrollY ? 'up' : 'down'
    }))
  };

  // Attach the event listener
  // note: listener should only be attached once, hence the empty whitelist 
  useEffect(() => {
    window.addEventListener('scroll', listener);

    // cleanup function occurs on unmount
    return () => window.removeEventListener('scroll', listener)
  }, []);


  return scroll;
}

export default useScroll;