import { useState, useEffect } from 'react';

export const useMediaQuery = (screen) => {
  const [matches, setMatches] = useState(false);

  const sizes = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  };

  useEffect(() => {
    const query = `(min-width: ${sizes[screen]})`;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, screen]);

  return matches;
};
