import React from "react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const handleSolutionClick = (solutionId: string) => {
    if (location.pathname === "/solutions") {
      // Check if window.setActiveSolution exists
      if (typeof window.setActiveSolution === "function") {
        window.setActiveSolution(solutionId);
        window.location.href = `/solutions#${solutionId}`;
      } else {
        console.error(
          "setActiveSolution is not defined on the /solutions page."
        );
      }
    } else {
      // Navigate to the solutions page with the selected solution
      window.location.href = `/solutions#${solutionId}`;
    }
  };

  return (
    <footer className="bg-alurion-primary text-white relative">
      <div className="absolute inset-0 pattern-bg-light opacity-10"></div>
      <div className="container mx-auto py-16 px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="relative space-y-6">
            {/* Logo */}
            <div className="flex items-center justify-center mt-12">
              <svg
                width="180"
                height="90"
                viewBox="0 0 995.32 504.62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-2"
              >
                <g id="Layer_1-2" data-name="Layer 1">
                  <g>
                    <polygon
                      className="fill-alurion-accent"
                      points="422.48 18.49 604.4 18.49 604.4 0 403.99 0 400.16 0 390.92 0 390.92 205.67 409.4 205.67 409.4 31.56 583.51 205.67 604.4 205.67 604.4 62.48 506.04 62.48 526.16 80.97 585.91 80.97 585.91 181.92 422.48 18.49"
                    />
                    <g className="fill-alurion-accent">
                      <path d="M0,426.24l49.88-115.44h18.17l51.67,115.44h-19.95l-13.18-29.75h-54.16l-12.83,29.75H0ZM38.84,379.74h41.69l-21.38-47.74-20.31,47.74Z" />
                      <polygon points="172.63 311.69 191.15 311.69 191.15 409.31 258.14 409.31 258.14 426.24 172.63 426.24 172.63 311.69" />
                      <path d="M308.02,311.69h18.52v59.68c0,6.65,1.28,12.95,3.83,18.89,2.55,5.94,6.35,10.75,11.4,14.43,5.04,3.69,11.01,5.52,17.9,5.52s12.86-1.84,17.91-5.52c5.04-3.68,8.85-8.52,11.4-14.52,2.55-6,3.83-12.26,3.83-18.8v-59.68h18.52v59.68c0,9.74-2.02,18.97-6.06,27.7-4.04,8.73-9.97,15.83-17.81,21.29-7.84,5.46-17.1,8.2-27.79,8.2s-19.95-2.73-27.79-8.2c-7.84-5.46-13.78-12.56-17.81-21.29-4.04-8.73-6.06-17.96-6.06-27.7v-59.68Z" />
                      <path d="M474.05,426.24v-114.55h78.56c6.65,0,12.32,1.49,17.01,4.46,4.69,2.97,8.25,6.95,10.69,11.93,2.43,4.99,3.65,10.51,3.65,16.57,0,8.79-2.32,16.24-6.95,22.36-4.63,6.12-11.52,9.53-20.67,10.24h-2.31l28.33,48.99h-20.66l-28.15-48.81h-40.98v48.81h-18.52ZM492.58,360.32h60.04c4.39,0,7.63-1.42,9.71-4.28,2.08-2.85,3.12-6.59,3.12-11.22s-1.1-8.34-3.29-11.49c-2.2-3.14-5.38-4.72-9.53-4.72h-60.04v31.71Z" />
                      <rect
                        x="642.23"
                        y="311.69"
                        width="18.52"
                        height="114.55"
                      />
                      <path d="M773.88,309.37c11.52,0,21.52,2.76,30.02,8.28,8.49,5.52,14.99,12.83,19.51,21.91,4.52,9.09,6.77,18.92,6.77,29.48s-2.26,20.22-6.77,29.31c-4.51,9.09-11.02,16.39-19.51,21.91-8.49,5.52-18.5,8.28-30.02,8.28s-21.35-2.76-29.84-8.28c-8.49-5.52-14.96-12.83-19.42-21.91-4.46-9.08-6.68-18.85-6.68-29.31s2.23-20.25,6.68-29.39c4.45-9.14,10.92-16.48,19.42-22,8.49-5.52,18.44-8.28,29.84-8.28M773.88,327.37c-7.48,0-13.96,1.96-19.42,5.88-5.46,3.92-9.62,9.06-12.47,15.41-2.85,6.35-4.28,13.09-4.28,20.22s1.42,13.84,4.28,20.13c2.85,6.3,7.01,11.4,12.47,15.32,5.46,3.92,11.94,5.88,19.42,5.88s14.01-1.93,19.6-5.79c5.58-3.86,9.83-8.93,12.74-15.23,2.91-6.3,4.36-13.01,4.36-20.13s-1.46-14.04-4.36-20.4c-2.91-6.35-7.13-11.49-12.65-15.41-5.52-3.92-12.09-5.88-19.69-5.88" />
                      <polygon points="887.54 311.69 905 311.69 976.79 396.84 976.79 311.69 995.32 311.69 995.32 426.24 977.86 426.24 906.06 340.9 906.06 426.24 887.54 426.24 887.54 311.69" />
                    </g>
                    <g className="fill-alurion-accent opacity-80">
                      <path d="M230.02,476.34h-14.65v27.32h-5.51v-27.32h-14.55v-4.82h34.71v4.82Z" />
                      <path d="M270.84,495.9h-20.62l-4.08,7.76h-5.97l17.4-32.14h6.06l17.36,32.14h-6.02l-4.13-7.76ZM268.41,491.22l-7.85-14.88-7.85,14.88h15.7Z" />
                      <path d="M329.47,498.79v4.87h-29.2v-32.14h5.51v27.27h23.69Z" />
                      <path d="M381.3,498.84v4.82h-32v-32.14h31.54v4.82h-26.08v8.59h21.95v4.82h-21.95v9.09h26.54Z" />
                      <path d="M437.82,471.52v32.14h-4.87l-25.12-25.34v25.34h-5.32v-32.14h5.88l24.06,24.38v-24.38h5.37Z" />
                      <path d="M492.27,476.34h-14.65v27.32h-5.51v-27.32h-14.55v-4.82h34.71v4.82Z" />
                      <path d="M570.91,496.45c-2.94,4.73-9.32,8.17-18.14,8.17-12.67,0-20.25-6.43-20.25-17.03s7.57-17.03,20.16-17.03c7.9,0,13.31,2.94,16.53,6.38l-4.5,3.21c-2.85-3.21-6.61-4.77-11.98-4.77-9.05,0-14.6,4.13-14.6,12.21s5.65,12.21,14.88,12.21c5.65,0,10.24-1.47,12.58-5.14v-3.67h-13.41v-4.73h18.73v10.19Z" />
                      <path d="M621.37,503.66l-9.96-11.66h-13.54v11.66h-5.51v-32.14h21.86c7.48,0,12.99,3.58,12.99,10.24,0,5.56-3.86,8.96-9.46,9.96l10.42,11.94h-6.79ZM613.83,487.27c4.59,0,7.72-1.47,7.72-5.46s-3.12-5.46-7.72-5.46h-16.02v10.93h16.02Z" />
                      <path d="M646.43,487.59c0-10.61,7.62-17.03,19.97-17.03s19.97,6.43,19.97,17.03-7.62,17.03-19.97,17.03-19.97-6.43-19.97-17.03ZM680.73,487.59c0-7.81-5.6-12.17-14.33-12.17s-14.37,4.36-14.37,12.17,5.6,12.17,14.37,12.17,14.33-4.36,14.33-12.17Z" />
                      <path d="M742.2,471.52v16.99c0,9.51-6.11,16.12-17.49,16.12s-17.45-6.61-17.45-16.12v-16.99h5.51v16.62c0,7.21,4.27,11.57,11.94,11.57s11.98-4.36,11.98-11.57v-16.62h5.51Z" />
                      <path d="M800,482.03c0,6.75-5.19,10.51-12.99,10.51h-16.21v11.11h-5.51v-32.14h21.72c7.81,0,12.99,3.81,12.99,10.51ZM794.36,482.08c0-4.13-3.08-5.74-7.8-5.74h-15.75v11.48h15.75c4.73,0,7.8-1.65,7.8-5.74Z" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            {/* Social icons */}
            <div className="flex items-center justify-center space-x-4 pt-2 mb-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-alurion-accent transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-alurion-accent transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-alurion-accent transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-6 text-alurion-accent">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <HashLink
                  to="/#mission"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Mission
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/#values"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Values
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/#team"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Meet the Team
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/#blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-6 text-alurion-accent">
              Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleSolutionClick("retained-search")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Retained Search
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSolutionClick("rpo")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  RPO
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSolutionClick("fractional-hr")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Fractional HR
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSolutionClick("consulting")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Consulting
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSolutionClick("board-advisory")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Board Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-6 text-alurion-accent">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center sm:items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-alurion-accent mr-3 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-300">info@aluriontalent.com</span>
              </li>
              <li className="flex items-center justify-center sm:items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-alurion-accent mr-3 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-300">(952)333-9877</span>
              </li>
              <li className="flex items-center justify-center sm:items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-alurion-accent mr-3 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-300">
                  5200 Wilson Road, Suite 150
                  <br />
                  Edina, MN 55424
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Alurion Talent Group. All rights
              reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <HashLink
                to="/privacy-policy"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </HashLink>
              <HashLink
                to="/terms-of-service"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </HashLink>
              <HashLink
                to="/cookie-policy"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
