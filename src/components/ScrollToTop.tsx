
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll to top if there's no hash (anchor link) in the URL
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Re-run when pathname or hash changes

  return null;
};

export default ScrollToTop;
