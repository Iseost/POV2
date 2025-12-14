// header for portfolio website
// contains logo and navigation links
// logo on left, nav links on right
// responsive design for mobile and desktop
// hamburger menu for mobile view
import { Link } from "react-router-dom";
import { useState } from "react";
import logoImage from "../../assets/logoiselin.png";

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
    <header className="shadow-md bg-white relative z-10 h-30">
      <div className="container mx-auto flex items-end justify-between p-4 pb-6">
        <Link to="/">
          <img
            src={logoImage}
            alt="Logo"
            className="h-40 w-auto absolute rounded-full top-2 left-18"
          />
        </Link>
        <nav className="p-18">
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-[#3A2A20] hover:text-[#7B513A] transition-colors duration-300 cursor-pointer font-bold"
              >
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-[#3A2A20] hover:text-[#7B513A] transition-colors duration-300 cursor-pointer font-bold"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-[#3A2A20] hover:text-[#7B513A] transition-colors duration-300 cursor-pointer font-bold"
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
        <div className="md:hidden shadow-md bg-white rounded-b-lg">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                to="/"
                className="text-[#3A2A20] hover:text-[#7B513A] transition-colors duration-300 cursor-pointer font-bold"
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
                className="text-[#3A2A20] hover:text-[#7B513A] transition-colors duration-300 cursor-pointer font-bold"
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
                className="text-[#3A2A20] hover:text-[#7B513A] transition-colors duration-300 cursor-pointer font-bold"
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
