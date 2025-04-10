import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Briefcase, Users, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
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
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1C213C]/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
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
          <Link to="/" className="nav-item text-white hover:text-alurion-secondary px-3 font-medium">Home</Link>
          <Link to="/mission" className="nav-item text-white hover:text-alurion-secondary px-3 font-medium">Mission</Link>
          <Link to="/values" className="nav-item text-white hover:text-alurion-secondary px-3 font-medium">Values</Link>
          <Link to="/team" className="nav-item text-white hover:text-alurion-secondary px-3 font-medium">Meet the Team</Link>
          
          <div className="nav-item text-white hover:text-alurion-secondary group px-3 font-medium">
            <div className="flex items-center">
              <Briefcase size={16} className="mr-1" />
              <span>Solutions</span>
              <ChevronDown size={14} className="ml-1" />
            </div>
            <div className="dropdown-menu bg-white/90 backdrop-blur-md">
              <Link to="/solutions" className="block px-4 py-2 text-sm hover:bg-alurion-secondary/20 rounded text-gray-700">
                All Solutions
              </Link>
              <Link to="/solutions" className="block px-4 py-2 text-sm hover:bg-alurion-secondary/20 rounded text-gray-700">
                Retained Search
              </Link>
              <Link to="/solutions" className="block px-4 py-2 text-sm hover:bg-alurion-secondary/20 rounded text-gray-700">
                RPO
              </Link>
              <Link to="/solutions" className="block px-4 py-2 text-sm hover:bg-alurion-secondary/20 rounded text-gray-700">
                Fractional HR & Talent Officer
              </Link>
              <Link to="/solutions" className="block px-4 py-2 text-sm hover:bg-alurion-secondary/20 rounded text-gray-700">
                Consulting
              </Link>
              <Link to="/solutions" className="block px-4 py-2 text-sm hover:bg-alurion-secondary/20 rounded text-gray-700">
                Talent Mapping & Pipelining
              </Link>
              <Link to="/solutions" className="block px-4 py-2 text-sm hover:bg-alurion-secondary/20 rounded text-gray-700">
                Board Advisory
              </Link>
              <Link to="/solutions" className="block px-4 py-2 text-sm hover:bg-alurion-secondary/20 rounded text-gray-700">
                Coaching & Development
              </Link>
            </div>
          </div>
          
          <Link to="/industries" className="nav-item text-white hover:text-alurion-secondary px-3 font-medium">Industries</Link>
          <Link to="/testimonials" className="nav-item text-white hover:text-alurion-secondary px-3 font-medium">Testimonials</Link>
          <Link to="/blog" className="nav-item text-white hover:text-alurion-secondary px-3 font-medium">Blog</Link>
          
          <div className="nav-item text-white hover:text-alurion-secondary group px-3 font-medium">
            <div className="flex items-center">
              <Users size={16} className="mr-1" />
              <span>For Candidates</span>
              <ChevronDown size={14} className="ml-1" />
            </div>
            <div className="dropdown-menu bg-white/90 backdrop-blur-md">
              <Link to="/candidates" className="block px-4 py-2 text-sm hover:bg-alurion-secondary/20 rounded text-gray-700">Submit Resume</Link>
              <Link to="/candidates" className="block px-4 py-2 text-sm hover:bg-alurion-secondary/20 rounded text-gray-700">Open Roles</Link>
            </div>
          </div>
          
          <Link to="/contact" className="nav-item text-white hover:text-alurion-secondary px-3 font-medium">Contact Us</Link>
        </nav>
        
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="lg:hidden bg-[#1C213C]/95 backdrop-blur-md py-4 px-6 shadow-lg animated fade-in">
          <Link to="/" className="block py-2 text-white hover:text-alurion-secondary">Home</Link>
          <Link to="/mission" className="block py-2 text-white hover:text-alurion-secondary">Mission</Link>
          <Link to="/values" className="block py-2 text-white hover:text-alurion-secondary">Values</Link>
          <Link to="/team" className="block py-2 text-white hover:text-alurion-secondary">Meet the Team</Link>
          <Link to="/solutions" className="block py-2 text-white hover:text-alurion-secondary">Solutions</Link>
          <Link to="/industries" className="block py-2 text-white hover:text-alurion-secondary">Industries & Functions</Link>
          <Link to="/testimonials" className="block py-2 text-white hover:text-alurion-secondary">Testimonials</Link>
          <Link to="/blog" className="block py-2 text-white hover:text-alurion-secondary">Blog</Link>
          <Link to="/candidates" className="block py-2 text-white hover:text-alurion-secondary">For Candidates</Link>
          <Link to="/contact" className="block py-2 text-white hover:text-alurion-secondary">Contact Us</Link>
        </div>}
    </header>;
};
export default Navigation;