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

  // Smooth scroll to section by id
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="shadow-md bg-[#F5F1EA]">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/">
          <img src={placeholderImage} alt="Logo" className="h-8 w-auto" />
        </Link>
        <nav>
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/" className="transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="transition-colors duration-300 cursor-pointer"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="transition-colors duration-300 cursor-pointer"
              >
                About
              </button>
            </li>
          </ul>

          {/* Mobile menu */}
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

      {/* Mobile dropdown */}
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
              <button
                onClick={() => {
                  scrollToSection("projects");
                  setIsMenuOpen(false);
                }}
                className="transition-colors duration-300 cursor-pointer"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("about");
                  setIsMenuOpen(false);
                }}
                className="transition-colors duration-300 cursor-pointer"
              >
                About
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
