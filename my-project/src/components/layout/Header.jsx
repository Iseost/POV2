// header for portfolio website
// contains logo and navigation links
// logo on left, nav links on right
// responsive design for mobile and desktop
// hamburger menu for mobile view
import { Link } from "react-router-dom";
import { useState } from "react";
import placeholderImage from "../../assets/image.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="shadow-md bg-[#F5F1EA]">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/">
          <img src={placeholderImage} alt="Logo" className="h-8 w-auto" />
        </Link>
        <nav>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/" className="transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition-colors duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="md:hidden shadow-md">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                to="/"
                className="transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
