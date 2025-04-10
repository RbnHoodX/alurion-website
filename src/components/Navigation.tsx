
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Briefcase, Users, Home } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Improved section navigation handler
  const navigateToSection = (sectionId: string, solutionId: string | null = null) => (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If already on homepage, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // If it's a solution, set the active solution
        if (solutionId && window.setActiveSolution) {
          window.setActiveSolution(solutionId);
        }
      }
    } else {
      // If not on homepage, navigate to homepage then scroll to section
      navigate('/');
      // Wait for page to load before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          
          // If it's a solution, set the active solution
          if (solutionId && window.setActiveSolution) {
            window.setActiveSolution(solutionId);
          }
        }
      }, 300);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-alurion-primary/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <svg width="40" height="32" viewBox="0 0 640.01 616.56" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <polygon className="fill-white" points="94.63 55.43 640.01 55.43 640.01 0 39.2 0 27.71 0 0 0 0 616.56 55.43 616.56 55.43 94.63 577.36 616.56 640.01 616.56 640.01 187.3 345.11 187.3 405.45 242.73 584.58 242.73 584.58 545.37 94.63 55.43" />
            </svg>
            <span className="text-xl font-bold text-white">Alurion</span>
          </Link>
        </div>
        
        <nav className="hidden lg:flex space-x-2">
          {/* Desktop Navigation */}
          <Link to="/" className="nav-item text-white hover:text-alurion-accent px-3 font-medium">Home</Link>
          <Link to="/mission" className="nav-item text-white hover:text-alurion-accent px-3 font-medium">Mission</Link>
          <Link to="/values" className="nav-item text-white hover:text-alurion-accent px-3 font-medium">Values</Link>
          <Link to="/team" className="nav-item text-white hover:text-alurion-accent px-3 font-medium">Meet the Team</Link>
          
          <div className="nav-item text-white hover:text-alurion-accent group px-3 font-medium">
            <div className="flex items-center">
              <Briefcase size={16} className="mr-1" />
              <span>Solutions</span>
              <ChevronDown size={14} className="ml-1" />
            </div>
            <div className="dropdown-menu bg-white/90 backdrop-blur-md">
              {/* Solution dropdown items with specific solution IDs */}
              <a 
                href="#solutions" 
                onClick={navigateToSection('solutions', 'retained-search')} 
                className="block px-4 py-2 text-sm hover:bg-alurion-accent/20 rounded text-gray-700"
              >
                Retained Search
              </a>
              <a 
                href="#solutions" 
                onClick={navigateToSection('solutions', 'rpo')} 
                className="block px-4 py-2 text-sm hover:bg-alurion-accent/20 rounded text-gray-700"
              >
                RPO
              </a>
              <a 
                href="#solutions" 
                onClick={navigateToSection('solutions', 'fractional-hr')} 
                className="block px-4 py-2 text-sm hover:bg-alurion-accent/20 rounded text-gray-700"
              >
                Fractional HR & Talent Officer
              </a>
              <a 
                href="#solutions" 
                onClick={navigateToSection('solutions', 'consulting')} 
                className="block px-4 py-2 text-sm hover:bg-alurion-accent/20 rounded text-gray-700"
              >
                Consulting
              </a>
              <a 
                href="#solutions" 
                onClick={navigateToSection('solutions', 'talent-mapping')} 
                className="block px-4 py-2 text-sm hover:bg-alurion-accent/20 rounded text-gray-700"
              >
                Talent Mapping & Pipelining
              </a>
              <a 
                href="#solutions" 
                onClick={navigateToSection('solutions', 'board-advisory')} 
                className="block px-4 py-2 text-sm hover:bg-alurion-accent/20 rounded text-gray-700"
              >
                Board Advisory
              </a>
              <a 
                href="#solutions" 
                onClick={navigateToSection('solutions', 'coaching')} 
                className="block px-4 py-2 text-sm hover:bg-alurion-accent/20 rounded text-gray-700"
              >
                Coaching & Development
              </a>
            </div>
          </div>
          
          <a href="#industries" onClick={navigateToSection('industries')} className="nav-item text-white hover:text-alurion-accent px-3 font-medium">Industries</a>
          <a href="#testimonials" onClick={navigateToSection('testimonials')} className="nav-item text-white hover:text-alurion-accent px-3 font-medium">Testimonials</a>
          <a href="#blog" onClick={navigateToSection('blog')} className="nav-item text-white hover:text-alurion-accent px-3 font-medium">Blog</a>
          
          <div className="nav-item text-white hover:text-alurion-accent group px-3 font-medium">
            <div className="flex items-center">
              <Users size={16} className="mr-1" />
              <span>For Candidates</span>
              <ChevronDown size={14} className="ml-1" />
            </div>
            <div className="dropdown-menu bg-white/90 backdrop-blur-md">
              <a href="#candidates" onClick={navigateToSection('candidates')} className="block px-4 py-2 text-sm hover:bg-alurion-accent/20 rounded text-gray-700">Submit Resume</a>
              <a href="#candidates" onClick={navigateToSection('candidates')} className="block px-4 py-2 text-sm hover:bg-alurion-accent/20 rounded text-gray-700">Open Roles</a>
            </div>
          </div>
          
          <a href="#contact" onClick={navigateToSection('contact')} className="nav-item text-white hover:text-alurion-accent px-3 font-medium">Contact Us</a>
        </nav>
        
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-alurion-primary/95 backdrop-blur-md py-4 px-6 shadow-lg animated fade-in">
          <Link to="/" className="block py-2 text-white hover:text-alurion-accent">Home</Link>
          <Link to="/mission" className="block py-2 text-white hover:text-alurion-accent">Mission</Link>
          <Link to="/values" className="block py-2 text-white hover:text-alurion-accent">Values</Link>
          <Link to="/team" className="block py-2 text-white hover:text-alurion-accent">Meet the Team</Link>
          <a href="#solutions" onClick={navigateToSection('solutions')} className="block py-2 text-white hover:text-alurion-accent">Solutions</a>
          <a href="#industries" onClick={navigateToSection('industries')} className="block py-2 text-white hover:text-alurion-accent">Industries & Functions</a>
          <a href="#testimonials" onClick={navigateToSection('testimonials')} className="block py-2 text-white hover:text-alurion-accent">Testimonials</a>
          <a href="#blog" onClick={navigateToSection('blog')} className="block py-2 text-white hover:text-alurion-accent">Blog</a>
          <a href="#candidates" onClick={navigateToSection('candidates')} className="block py-2 text-white hover:text-alurion-accent">For Candidates</a>
          <a href="#contact" onClick={navigateToSection('contact')} className="block py-2 text-white hover:text-alurion-accent">Contact Us</a>
        </div>
      )}
    </header>
  );
};

export default Navigation;
