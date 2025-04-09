
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Briefcase, Users, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
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

  // Helper function to create section links that work from any page
  const createSectionLink = (sectionId) => {
    // If on homepage, smooth scroll to section
    if (isHomePage) {
      return {
        href: `#${sectionId}`,
        onClick: (e) => {
          e.preventDefault();
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
    } 
    // If on other pages, link to homepage with section hash
    else {
      return {
        href: `/#${sectionId}`,
      };
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-md py-2' : 'py-3'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <svg width="40" height="32" viewBox="0 0 520 501" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M76.995 45.6265H519.276V0.669922H32.0384H22.7299H0.255859V500.67H45.2039V77.409L468.473 500.67H519.276V152.571H280.127L329.061 197.519H474.319V442.951L76.995 45.6265Z" fill="#1C213C"/>
            </svg>
            <svg width="120" height="32" viewBox="0 0 750 190" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 88.0672L37.5797 1.07715H51.2735L90.2001 88.0672H75.1593L65.2367 65.6406H24.4246L14.7714 88.0672H0ZM29.2736 53.0242H60.6798L44.5613 17.0385L29.2512 53.0242H29.2736Z" fill="#1C213C"/>
              <path d="M130.091 1.75195H144.054V75.3174H194.52V88.0684H130.091V1.75195Z" fill="#1C213C"/>
              <path d="M232.103 1.75195H246.066V46.7173C246.066 51.7234 247.031 56.4827 248.962 60.95C250.892 65.4174 253.743 69.0541 257.56 71.8153C261.354 74.599 265.866 75.9685 271.052 75.9685C276.237 75.9685 280.75 74.5765 284.543 71.8153C288.337 69.0541 291.211 65.3949 293.141 60.8826C295.072 56.3704 296.037 51.6336 296.037 46.7173V1.75195H310.001V46.7173C310.001 54.0581 308.474 61.0173 305.443 67.5949C302.39 74.1724 297.923 79.5154 292.019 83.646C286.115 87.7542 279.133 89.8195 271.074 89.8195C263.015 89.8195 256.033 87.7542 250.129 83.646C244.225 79.5378 239.757 74.1724 236.704 67.5949C233.651 61.0173 232.147 54.0581 232.147 46.7173V1.75195H232.103Z" fill="#1C213C"/>
              <path d="M357.207 88.0684V1.75195H416.405C421.411 1.75195 425.699 2.8744 429.223 5.11931C432.748 7.36421 435.442 10.3498 437.283 14.1213C439.124 17.8702 440.044 22.0458 440.044 26.6029C440.044 33.2254 438.293 38.8376 434.813 43.4397C431.334 48.0417 426.126 50.6234 419.234 51.1622H417.483L438.832 88.0684H423.252L402.038 51.2969H371.17V88.0684H357.207ZM371.17 38.3887H416.405C419.705 38.3887 422.152 37.3111 423.724 35.156C425.295 33.0009 426.081 30.1948 426.081 26.6928C426.081 23.1908 425.25 20.4071 423.589 18.0275C421.927 15.6479 419.548 14.4805 416.405 14.4805H371.17V38.3663V38.3887Z" fill="#1C213C"/>
              <path d="M483.934 1.75195H497.897V88.0684H483.934V1.75195Z" fill="#1C213C"/>
              <path d="M583.138 0C591.826 0 599.346 2.08783 605.766 6.2409C612.164 10.394 617.058 15.9164 620.471 22.7409C623.883 29.5878 625.567 36.9961 625.567 44.9655C625.567 52.9349 623.86 60.2083 620.471 67.0553C617.058 73.9022 612.164 79.4022 605.766 83.5552C599.368 87.7083 591.826 89.7961 583.138 89.7961C574.45 89.7961 567.042 87.7083 560.644 83.5552C554.246 79.4022 549.374 73.9022 546.007 67.0553C542.64 60.2083 540.979 52.8451 540.979 44.9655C540.979 37.0859 542.662 29.7 546.007 22.8082C549.352 15.9163 554.246 10.394 560.644 6.2409C567.042 2.08783 574.54 0 583.138 0ZM583.138 13.5592C577.503 13.5592 572.609 15.0409 568.501 17.9817C564.393 20.945 561.25 24.8062 559.095 29.5878C556.94 34.3695 555.885 39.4429 555.885 44.8307C555.885 50.2184 556.962 55.247 559.095 60.0062C561.25 64.743 564.37 68.6042 568.501 71.5451C572.609 74.5083 577.503 75.9676 583.138 75.9676C588.773 75.9676 593.689 74.5084 597.909 71.6125C602.107 68.6941 605.317 64.8777 607.495 60.1409C609.695 55.4042 610.795 50.3308 610.795 44.9655C610.795 39.6002 609.695 34.3919 607.495 29.5878C605.295 24.8062 602.13 20.9225 597.977 17.9817C593.824 15.0409 588.862 13.5592 583.138 13.5592Z" fill="#1C213C"/>
              <path d="M668.78 1.75195H681.935L736.037 65.9112V1.75195H750.001V88.0684H736.846L682.744 23.7745V88.0684H668.78V1.75195Z" fill="#1C213C"/>
              <path d="M159.793 166.162C159.793 162.211 160.624 158.507 162.307 155.005C163.991 151.525 166.415 148.696 169.603 146.541C172.791 144.386 176.54 143.309 180.85 143.309C184.846 143.309 188.483 144.274 191.76 146.205C195.038 148.135 197.597 150.784 199.438 154.196L199.932 155.094L192.77 155.162L192.569 154.892C191.199 153.096 189.493 151.682 187.45 150.649C185.407 149.617 183.207 149.1 180.872 149.1C177.842 149.1 175.193 149.909 172.948 151.547C170.703 153.186 168.997 155.296 167.852 157.878C166.707 160.482 166.123 163.221 166.123 166.094C166.123 168.968 166.707 171.796 167.875 174.423C169.042 177.027 170.748 179.16 172.993 180.754C175.238 182.37 177.909 183.156 180.985 183.156C183.634 183.156 186.058 182.527 188.213 181.292C190.368 180.058 192.12 178.374 193.444 176.264C194.769 174.154 195.622 171.841 195.981 169.305H182.422V163.872H202.109L202.177 164.5L202.244 166.162C202.244 170.158 201.413 173.884 199.73 177.386C198.046 180.866 195.621 183.694 192.389 185.85C189.179 188.005 185.385 189.082 181.03 189.082C176.675 189.082 172.813 188.027 169.603 185.872C166.393 183.739 163.946 180.911 162.262 177.409C160.579 173.907 159.748 170.135 159.748 166.162H159.793Z" fill="#1C213C"/>
              <path d="M258.301 188.117V144.207H288.248C290.74 144.207 292.85 144.768 294.623 145.891C296.397 147.013 297.699 148.517 298.574 150.403C299.45 152.289 299.876 154.354 299.876 156.599C299.876 159.809 299.023 162.593 297.295 164.972C295.566 167.33 293.029 168.609 289.684 168.789L287.686 168.856L298.776 188.14H292.244L281.289 168.856H264.137V188.14H258.278L258.301 188.117ZM264.16 163.468H288.248C290.178 163.468 291.615 162.84 292.58 161.583C293.546 160.325 294.017 158.687 294.017 156.666C294.017 154.646 293.523 153.03 292.536 151.683C291.548 150.336 290.111 149.64 288.225 149.64H264.137V163.468H264.16Z" fill="#1C213C"/>
              <path d="M353.105 166.162C353.105 162.166 353.936 158.439 355.62 154.937C357.303 151.458 359.75 148.629 362.961 146.496C366.171 144.364 369.965 143.286 374.32 143.286C378.675 143.286 382.469 144.364 385.679 146.496C388.889 148.629 391.336 151.435 393.042 154.937C394.748 158.417 395.579 162.166 395.579 166.162C395.579 170.158 394.726 173.907 393.042 177.409C391.336 180.911 388.889 183.739 385.679 185.872C382.469 188.005 378.675 189.082 374.32 189.082C369.965 189.082 366.171 188.005 362.961 185.85C359.75 183.694 357.303 180.866 355.62 177.386C353.936 173.907 353.105 170.158 353.105 166.162ZM389.316 166.162C389.316 163.221 388.71 160.437 387.52 157.833C386.33 155.207 384.602 153.096 382.334 151.503C380.067 149.909 377.395 149.1 374.32 149.1C371.244 149.1 368.573 149.909 366.328 151.503C364.083 153.119 362.377 155.229 361.21 157.833C360.042 160.437 359.458 163.199 359.458 166.094C359.458 168.99 360.042 171.796 361.21 174.423C362.377 177.027 364.083 179.16 366.328 180.754C368.573 182.37 371.244 183.156 374.32 183.156C377.395 183.156 380.067 182.347 382.334 180.754C384.602 179.16 386.33 177.049 387.52 174.445C388.71 171.864 389.316 169.08 389.316 166.162Z" fill="#1C213C"/>
              <path d="M451.608 167.127V144.207H457.468V167.127C457.468 169.844 458.006 172.425 459.061 174.872C460.116 177.319 461.688 179.317 463.753 180.866C465.818 182.415 468.265 183.179 471.116 183.179C473.968 183.179 476.415 182.415 478.48 180.866C480.545 179.317 482.094 177.342 483.149 174.872C484.204 172.425 484.743 169.844 484.743 167.127V144.207H490.602V167.127C490.602 170.809 489.839 174.334 488.335 177.701C486.831 181.068 484.586 183.807 481.668 185.917C478.727 188.028 475.225 189.083 471.139 189.083C467.053 189.083 463.551 188.028 460.61 185.917C457.67 183.807 455.447 181.068 453.92 177.701C452.416 174.334 451.653 170.809 451.653 167.127H451.608Z" fill="#1C213C"/>
              <path d="M548.676 188.117V144.207H578.623C581.115 144.207 583.225 144.768 584.998 145.891C586.772 147.013 588.074 148.517 588.949 150.403C589.825 152.289 590.251 154.354 590.251 156.599C590.251 160.078 589.241 162.997 587.221 165.332C585.2 167.666 582.327 168.834 578.623 168.834H554.535V188.117H548.676ZM554.535 163.468H578.623C580.553 163.468 581.99 162.84 582.955 161.583C583.921 160.325 584.392 158.687 584.392 156.666C584.392 154.646 583.898 153.03 582.911 151.683C581.923 150.336 580.486 149.64 578.6 149.64H554.512V163.468H554.535Z" fill="#1C213C"/>
            </svg>
          </Link>
        </div>
        
        <nav className="hidden lg:flex space-x-0">
          {/* Desktop Navigation - Added Home link */}
          <Link to="/" className="nav-item text-alurion-secondary hover:text-black px-3 flex items-center">
            <Home size={16} className="mr-1" />
            <span>Home</span>
          </Link>
          <Link to="/mission" className="nav-item text-alurion-secondary hover:text-black px-3">Mission</Link>
          <Link to="/values" className="nav-item text-alurion-secondary hover:text-black px-3">Values</Link>
          <Link to="/team" className="nav-item text-alurion-secondary hover:text-black px-3">Meet the Team</Link>
          
          <div className="nav-item text-alurion-secondary hover:text-black group px-3">
            <div className="flex items-center">
              <Briefcase size={16} className="mr-1" />
              <span>Solutions</span>
              <ChevronDown size={14} className="ml-1" />
            </div>
            <div className="dropdown-menu">
              {/* Solution items now handle both homepage and other page scenarios */}
              <a 
                {...createSectionLink('solutions')} 
                className="block px-4 py-2 text-sm hover:bg-gray-100 rounded"
              >
                Retained Search
              </a>
              <a 
                {...createSectionLink('solutions')} 
                className="block px-4 py-2 text-sm hover:bg-gray-100 rounded"
              >
                RPO
              </a>
              <a 
                {...createSectionLink('solutions')} 
                className="block px-4 py-2 text-sm hover:bg-gray-100 rounded"
              >
                Fractional HR & Talent Officer
              </a>
              <a 
                {...createSectionLink('solutions')} 
                className="block px-4 py-2 text-sm hover:bg-gray-100 rounded"
              >
                Consulting
              </a>
              <a 
                {...createSectionLink('solutions')} 
                className="block px-4 py-2 text-sm hover:bg-gray-100 rounded"
              >
                Talent Mapping & Pipelining
              </a>
              <a 
                {...createSectionLink('solutions')} 
                className="block px-4 py-2 text-sm hover:bg-gray-100 rounded"
              >
                Board Advisory
              </a>
              <a 
                {...createSectionLink('solutions')} 
                className="block px-4 py-2 text-sm hover:bg-gray-100 rounded"
              >
                Coaching & Development
              </a>
            </div>
          </div>
          
          <a {...createSectionLink('industries')} className="nav-item text-alurion-secondary hover:text-black px-3">Industries</a>
          <a {...createSectionLink('testimonials')} className="nav-item text-alurion-secondary hover:text-black px-3">Testimonials</a>
          <a {...createSectionLink('blog')} className="nav-item text-alurion-secondary hover:text-black px-3">Blog</a>
          
          <div className="nav-item text-alurion-secondary hover:text-black group px-3">
            <div className="flex items-center">
              <Users size={16} className="mr-1" />
              <span>For Candidates</span>
              <ChevronDown size={14} className="ml-1" />
            </div>
            <div className="dropdown-menu">
              <a {...createSectionLink('submit-resume')} className="block px-4 py-2 text-sm hover:bg-gray-100 rounded">Submit Resume</a>
              <a {...createSectionLink('open-roles')} className="block px-4 py-2 text-sm hover:bg-gray-100 rounded">Open Roles</a>
            </div>
          </div>
          
          <a {...createSectionLink('contact')} className="nav-item text-alurion-secondary hover:text-black px-3">Contact Us</a>
        </nav>
        
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-alurion-secondary p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-6 shadow-lg animated fade-in">
          <Link to="/" className="block py-2 text-alurion-secondary hover:text-black">Home</Link>
          <Link to="/mission" className="block py-2 text-alurion-secondary hover:text-black">Mission</Link>
          <Link to="/values" className="block py-2 text-alurion-secondary hover:text-black">Values</Link>
          <Link to="/team" className="block py-2 text-alurion-secondary hover:text-black">Meet the Team</Link>
          <a href={isHomePage ? "#solutions" : "/#solutions"} className="block py-2 text-alurion-secondary hover:text-black">Solutions</a>
          <a href={isHomePage ? "#industries" : "/#industries"} className="block py-2 text-alurion-secondary hover:text-black">Industries & Functions</a>
          <a href={isHomePage ? "#testimonials" : "/#testimonials"} className="block py-2 text-alurion-secondary hover:text-black">Testimonials</a>
          <a href={isHomePage ? "#blog" : "/#blog"} className="block py-2 text-alurion-secondary hover:text-black">Blog</a>
          <a href={isHomePage ? "#candidates" : "/#candidates"} className="block py-2 text-alurion-secondary hover:text-black">For Candidates</a>
          <a href={isHomePage ? "#contact" : "/#contact"} className="block py-2 text-alurion-secondary hover:text-black">Contact Us</a>
        </div>
      )}
    </header>
  );
};

export default Navigation;
