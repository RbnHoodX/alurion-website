
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

  // Function to handle solutions dropdown item clicks
  const handleSolutionClick = (solutionId: string) => {
    // Access window.setActiveSolution if it exists (defined in SolutionsSection)
    if (window.location.pathname === '/solutions' && window.setActiveSolution) {
      window.setActiveSolution(solutionId);
    }
    
    // Close the mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-alurion-primary ${isScrolled ? 'shadow-lg py-2' : 'py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <svg width="180" height="40" viewBox="0 0 995.32 504.62" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <g id="Layer_1-2" data-name="Layer 1">
                <g>
                  <polygon className="fill-white" points="422.48 18.49 604.4 18.49 604.4 0 403.99 0 400.16 0 390.92 0 390.92 205.67 409.4 205.67 409.4 31.56 583.51 205.67 604.4 205.67 604.4 62.48 506.04 62.48 526.16 80.97 585.91 80.97 585.91 181.92 422.48 18.49"/>
                  <g className="fill-white">
                    <path d="M0,426.24l49.88-115.44h18.17l51.67,115.44h-19.95l-13.18-29.75h-54.16l-12.83,29.75H0ZM38.84,379.74h41.69l-21.38-47.74-20.31,47.74Z"/>
                    <polygon points="172.63 311.69 191.15 311.69 191.15 409.31 258.14 409.31 258.14 426.24 172.63 426.24 172.63 311.69"/>
                    <path d="M308.02,311.69h18.52v59.68c0,6.65,1.28,12.95,3.83,18.89,2.55,5.94,6.35,10.75,11.4,14.43,5.04,3.69,11.01,5.52,17.9,5.52s12.86-1.84,17.91-5.52c5.04-3.68,8.85-8.52,11.4-14.52,2.55-6,3.83-12.26,3.83-18.8v-59.68h18.52v59.68c0,9.74-2.02,18.97-6.06,27.7-4.04,8.73-9.97,15.83-17.81,21.29-7.84,5.46-17.1,8.2-27.79,8.2s-19.95-2.73-27.79-8.2c-7.84-5.46-13.78-12.56-17.81-21.29-4.04-8.73-6.06-17.96-6.06-27.7v-59.68Z"/>
                    <path d="M474.05,426.24v-114.55h78.56c6.65,0,12.32,1.49,17.01,4.46,4.69,2.97,8.25,6.95,10.69,11.93,2.43,4.99,3.65,10.51,3.65,16.57,0,8.79-2.32,16.24-6.95,22.36-4.63,6.12-11.52,9.53-20.67,10.24h-2.31l28.33,48.99h-20.66l-28.15-48.81h-40.98v48.81h-18.52ZM492.58,360.32h60.04c4.39,0,7.63-1.42,9.71-4.28,2.08-2.85,3.12-6.59,3.12-11.22s-1.1-8.34-3.29-11.49c-2.2-3.14-5.38-4.72-9.53-4.72h-60.04v31.71Z"/>
                    <rect x="642.23" y="311.69" width="18.52" height="114.55"/>
                    <path d="M773.88,309.37c11.52,0,21.52,2.76,30.02,8.28,8.49,5.52,14.99,12.83,19.51,21.91,4.52,9.09,6.77,18.92,6.77,29.48s-2.26,20.22-6.77,29.31c-4.51,9.09-11.02,16.39-19.51,21.91-8.49,5.52-18.5,8.28-30.02,8.28s-21.35-2.76-29.84-8.28c-8.49-5.52-14.96-12.83-19.42-21.91-4.46-9.08-6.68-18.85-6.68-29.31s2.23-20.25,6.68-29.39c4.45-9.14,10.92-16.48,19.42-22,8.49-5.52,18.44-8.28,29.84-8.28M773.88,327.37c-7.48,0-13.96,1.96-19.42,5.88-5.46,3.92-9.62,9.06-12.47,15.41-2.85,6.35-4.28,13.09-4.28,20.22s1.42,13.84,4.28,20.13c2.85,6.3,7.01,11.4,12.47,15.32,5.46,3.92,11.94,5.88,19.42,5.88s14.01-1.93,19.6-5.79c5.58-3.86,9.83-8.93,12.74-15.23,2.91-6.3,4.36-13.01,4.36-20.13s-1.46-14.04-4.36-20.4c-2.91-6.35-7.13-11.49-12.65-15.41-5.52-3.92-12.09-5.88-19.69-5.88"/>
                    <polygon points="887.54 311.69 905 311.69 976.79 396.84 976.79 311.69 995.32 311.69 995.32 426.24 977.86 426.24 906.06 340.9 906.06 426.24 887.54 426.24 887.54 311.69"/>
                  </g>
                  <g className="fill-white opacity-80">
                    <path d="M230.02,476.34h-14.65v27.32h-5.51v-27.32h-14.55v-4.82h34.71v4.82Z"/>
                    <path d="M270.84,495.9h-20.62l-4.08,7.76h-5.97l17.4-32.14h6.06l17.36,32.14h-6.02l-4.13-7.76ZM268.41,491.22l-7.85-14.88-7.85,14.88h15.7Z"/>
                    <path d="M329.47,498.79v4.87h-29.2v-32.14h5.51v27.27h23.69Z"/>
                    <path d="M381.3,498.84v4.82h-32v-32.14h31.54v4.82h-26.08v8.59h21.95v4.82h-21.95v9.09h26.54Z"/>
                    <path d="M437.82,471.52v32.14h-4.87l-25.12-25.34v25.34h-5.32v-32.14h5.88l24.06,24.38v-24.38h5.37Z"/>
                    <path d="M492.27,476.34h-14.65v27.32h-5.51v-27.32h-14.55v-4.82h34.71v4.82Z"/>
                    <path d="M570.91,496.45c-2.94,4.73-9.32,8.17-18.14,8.17-12.67,0-20.25-6.43-20.25-17.03s7.57-17.03,20.16-17.03c7.9,0,13.31,2.94,16.53,6.38l-4.5,3.21c-2.85-3.21-6.61-4.77-11.98-4.77-9.05,0-14.6,4.13-14.6,12.21s5.65,12.21,14.88,12.21c5.65,0,10.24-1.47,12.58-5.14v-3.67h-13.41v-4.73h18.73v10.19Z"/>
                    <path d="M621.37,503.66l-9.96-11.66h-13.54v11.66h-5.51v-32.14h21.86c7.48,0,12.99,3.58,12.99,10.24,0,5.56-3.86,8.96-9.46,9.96l10.42,11.94h-6.79ZM613.83,487.27c4.59,0,7.72-1.47,7.72-5.46s-3.12-5.46-7.72-5.46h-16.02v10.93h16.02Z"/>
                    <path d="M646.43,487.59c0-10.61,7.62-17.03,19.97-17.03s19.97,6.43,19.97,17.03-7.62,17.03-19.97,17.03-19.97-6.43-19.97-17.03ZM680.73,487.59c0-7.81-5.6-12.17-14.33-12.17s-14.37,4.36-14.37,12.17,5.6,12.17,14.37,12.17,14.33-4.36,14.33-12.17Z"/>
                    <path d="M742.2,471.52v16.99c0,9.51-6.11,16.12-17.49,16.12s-17.45-6.61-17.45-16.12v-16.99h5.51v16.62c0,7.21,4.27,11.57,11.94,11.57s11.98-4.36,11.98-11.57v-16.62h5.51Z"/>
                    <path d="M800,482.03c0,6.75-5.19,10.51-12.99,10.51h-16.21v11.11h-5.51v-32.14h21.72c7.81,0,12.99,3.81,12.99,10.51ZM794.36,482.08c0-4.13-3.08-5.74-7.8-5.74h-15.75v11.48h15.75c4.73,0,7.8-1.65,7.8-5.74Z"/>
                  </g>
                </g>
              </g>
            </svg>
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
              <Link 
                to="/solutions#retained-search" 
                onClick={() => handleSolutionClick('retained-search')}
                className="block px-4 py-2 text-sm hover:bg-alurion-secondary/20 rounded text-gray-700"
              >
                Retained Search
              </Link>
              <Link 
                to="/solutions#rpo" 
                onClick={() => handleSolutionClick('rpo')}
                className="block px-4 py-2 text-sm hover:bg-alurion-secondary/20 rounded text-gray-700"
              >
                RPO
              </Link>
              <Link 
                to="/solutions#fractional-hr" 
                onClick={() => handleSolutionClick('fractional-hr')}
                className="block px-4 py-2 text-sm hover:bg-alurion-secondary/20 rounded text-gray-700"
              >
                Fractional HR & Talent Officer
              </Link>
              <Link 
                to="/solutions#consulting" 
                onClick={() => handleSolutionClick('consulting')}
                className="block px-4 py-2 text-sm hover:bg-alurion-secondary/20 rounded text-gray-700"
              >
                Consulting
              </Link>
              <Link 
                to="/solutions#talent-mapping" 
                onClick={() => handleSolutionClick('talent-mapping')}
                className="block px-4 py-2 text-sm hover:bg-alurion-secondary/20 rounded text-gray-700"
              >
                Talent Mapping & Pipelining
              </Link>
              <Link 
                to="/solutions#board-advisory" 
                onClick={() => handleSolutionClick('board-advisory')}
                className="block px-4 py-2 text-sm hover:bg-alurion-secondary/20 rounded text-gray-700"
              >
                Board Advisory
              </Link>
              <Link 
                to="/solutions#coaching" 
                onClick={() => handleSolutionClick('coaching')}
                className="block px-4 py-2 text-sm hover:bg-alurion-secondary/20 rounded text-gray-700"
              >
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
