import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return <>
      {isVisible && <Button variant="secondary" size="icon" onClick={scrollToTop} aria-label="Scroll to top" className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-alurion-secondary text-white hover:bg-alurion-secondary/90">
          <ArrowUp className="h-5 w-5" />
        </Button>}
    </>;
};
export default ScrollToTopButton;