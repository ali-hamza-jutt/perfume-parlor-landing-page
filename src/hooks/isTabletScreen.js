import { useState, useEffect } from 'react';

const useTabletScreen = () => { 
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 729 && window.innerWidth <= 912);

  const handleResize = () => {
    setIsTablet(window.innerWidth >= 729 && window.innerWidth <= 912);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isTablet };
};

export default useTabletScreen;
