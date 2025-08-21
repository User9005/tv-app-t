import { useEffect, useState } from 'react';

const useIsLandscapeMobile = () => {
  const [isLandscapeMobile, setIsLandscapeMobile] = useState(false);

  const check = () => {
    const maxLandscapeMobileWidth = 1024; // include tablets like iPad in landscape
    const isMobileOrTablet = window.innerWidth <= maxLandscapeMobileWidth;
    const isLandscape = window.innerWidth > window.innerHeight;

    setIsLandscapeMobile(isMobileOrTablet && isLandscape);
  };

  useEffect(() => {
    check();
    window.addEventListener('resize', check);
    window.addEventListener('orientationchange', check);

    return () => {
      window.removeEventListener('resize', check);
      window.removeEventListener('orientationchange', check);
    };
  }, []);

  return isLandscapeMobile;
};

export default useIsLandscapeMobile;
