import { useRef, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import imageOfMe from "../assets/imageme.png";
import placeholderImage from "../assets/image.png";
import { auctionHouseImage } from "../assets/images";
import { brightCartImage } from "../assets/images";
import { mmfImage } from "../assets/images";
import { mortogise } from "../assets/images";

function ProjectCard({ id, title, image, description }) {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate(`/project/${id}`);
  };

  const smallerSentence = (text) => {
    if (!text) return "No description available";
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    const twoSentences = sentences.slice(0, 2).join(" ");

    if (twoSentences.length > 100) {
      return twoSentences.slice(0, 100) + "...";
    }

    return twoSentences;
  };

  return (
    <div className="flex flex-col rounded-xl bg-white/90 shadow-md transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] overflow-hidden w-full min-h-[350px] sm:min-h-[360px] md:min-h-[380px]">
      <div className="flex items-center justify-center w-full h-40 sm:h-48 md:h-56 overflow-hidden shrink-0">
        <img
          src={image || placeholderImage}
          alt={title}
          className="object-cover object-top w-full h-full"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = placeholderImage;
          }}
        />
      </div>
      <div className="p-4 flex flex-col grow">
        <h2 className="text-base md:text-2xl font-bold mb-2 text-[#3A2A20]">
          {title}
        </h2>
        <p className="text-xs sm:text-sm pb-3 pt-3 text-[#6B5A4E] grow">
          {smallerSentence(description)}
        </p>
        <Link to={`/project/${id}`} className="mt-auto">
          <button
            onClick={handleClick}
            className="w-full px-6 py-2 bg-[#7B513A] text-white font-semibold rounded-lg hover:bg-[#5A3A2A] transition-colors duration-300"
          >
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function HomePage() {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  // Handle scrolling to section when navigating from another page
  useEffect(() => {
    if (location.state?.scrollTo) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const section = document.getElementById(location.state.scrollTo);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const projects = [
    {
      id: 1,
      title: "Auction House",
      image: auctionHouseImage || placeholderImage,
      description: "Semester project 2",
      category: "school",
    },
    {
      id: 2,
      title: "BrightCart",
      image: brightCartImage || placeholderImage,
      description: "Assignment for JavaScript frameworks course.",
      category: "school",
    },
    {
      id: 3,
      title: "CSS frameworks",
      image: placeholderImage,
      description: "This is a description of project three.",
      category: "school",
    },
    {
      id: 4,
      title: "MMF - musikkforandrerliv",
      image: mmfImage || placeholderImage,
      description:
        "This project was a collaborative effort between all Frontend Development students at Noroff. ",
      category: "school",
    },
    {
      id: 5,
      title: "Morten + Iselin",
      image: mortogise || placeholderImage,
      description:
        "A personal hobby project where I designed and built a wedding invitation website for my own wedding.",
      category: "private",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const funFacts = [
    "Tolkien ❤️",
    "Coffee ☕",
    "Music (metal) 🎸",
    "Knitting, baking and lego 🧶🍰🧱",
    "Orange cats 🐱",
    "Team vans/converse 👟",
  ];

  const skills = [
    "React",
    "JavaScript",
    "HTML/CSS",
    "Tailwind",
    "Git",
    "Responsive Design",
    "API Integration",
    "UX/UI",
  ];

  return (
    <div className="bg-[#FAF7F3] text-[#3A2A20]">
      {/* Hero Section */}
      <div className="min-h-screen bg-linear-to-b from-[#7B513A] to-[#E7C098] flex items-center relative overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4">
          <div className="flex-1 max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Crafting Experiences, One Line at a Time.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              Daytime coder, nighttime problem solver, always chasing cleaner
              UI.
            </p>
          </div>

          <div className="relative w-72 md:w-96">
            <img
              src={imageOfMe}
              alt="Portrait of Iselin, frontend developer"
              className="w-full h-auto object-cover rounded-full"
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 60%, transparent 100%)",
                maskImage:
                  "radial-gradient(ellipse at center, black 60%, transparent 100%)",
              }}
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-b from-transparent to-[#FAF7F3]" />
      </div>

      {/* Projects */}
      <div
        ref={projectsRef}
        id="projects"
        className="container mx-auto px-4 py-20"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          My Projects
        </h1>
        <p className="text-center text-[#6B5A4E] mb-8 max-w-2xl mx-auto">
          A collection of projects showcasing my journey in frontend development
        </p>

        {/* Buttons */}
        <div
          className="flex justify-center gap-4 mb-20
        "
        >
          {["all", "school", "private"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 font-semibold rounded-lg transition-all hover:scale-105 shadow-md ${
                selectedCategory === cat
                  ? "bg-[#7B513A] text-white"
                  : "bg-white text-[#7B513A] hover:bg-[#E7C098]/40"
              }`}
            >
              {cat === "all"
                ? "All Projects"
                : cat === "school"
                  ? "School Projects"
                  : "Private Projects"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>

      {/* About */}
      <section
        ref={aboutRef}
        id="about"
        className="mx-auto px-4 py-20 bg-[#F3EADF] rounded-xl shadow-md"
      >
        <div className="max-w-6xl mx-auto">
          {" "}
          {/* Add this wrapper */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex-1">
              <h1 className="text-4xl font-bold">Hi everyone,</h1>
              <h2 className="text-2xl text-[#6B5A4E]">I'm Iselin!</h2>
              <p className="text-[#6B5A4E] leading-relaxed">
                I'm a frontend developer in the final stretch of my education —
                just two assignments away from officially graduating this
                December (so yes, I'm basically done). I spend my days turning
                ideas into interactive interfaces, and when I finally sleep, I
                somehow end up dreaming about solutions, layouts, and why that
                one bug still hasn't fixed itself. I enjoy learning by doing,
                experimenting with new solutions, and building things that are
                both functional and visually satisfying.
              </p>
              <p className="text-[#6B5A4E] leading-relaxed font-bold">
                When I'm not glued to my screen, this box spills a few fun facts
                about me →
              </p>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="bg-[#E7C098] rounded-3xl shadow-xl p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Fun Facts
                </h2>
                <ul className="space-y-3 text-white text-lg">
                  {funFacts.map((fact, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Close wrapper */}
        {/* Skills */}
        <div className="mt-30">
          <h3 className="text-2xl font-bold text-center mb-8">
            Tech Stack & Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#E7C098]/40 text-[#7B513A] rounded-full shadow-sm hover:shadow-md transition-shadow font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-[#7B513A] text-white p-4 rounded-full shadow-lg hover:bg-[#5A3A2A] transition-all duration-300 hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
