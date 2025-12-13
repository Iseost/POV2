import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import imageOfMe from "../assets/me.png";
import placeholderImage from "../assets/image.png";

function ProjectCard({ id, title, image, description }) {
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
    <Link to={`/project/${id}`}>
      <div className="flex flex-col rounded-xl bg-white shadow-md transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer overflow-hidden w-full min-h-[420px] sm:min-h-[450px] md:min-h-[480px]">
        <div className="flex items-center justify-center w-full h-40 sm:h-48 md:h-56 overflow-hidden shrink-0">
          <img
            src={image || placeholderImage}
            alt={title}
            className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
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
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Project One",
      image: placeholderImage,
      description: "This is a description of project one.",
      category: "school",
    },
    {
      id: 2,
      title: "Project Two",
      image: placeholderImage,
      description: "This is a description of project two.",
      category: "private",
    },
    {
      id: 3,
      title: "Project Three",
      image: placeholderImage,
      description: "This is a description of project three.",
      category: "school",
    },
    {
      id: 4,
      title: "Project Four",
      image: placeholderImage,
      description: "This is a description of project four.",
      category: "private",
    },
    {
      id: 5,
      title: "Project Five",
      image: placeholderImage,
      description: "This is a description of project five.",
      category: "school",
    },
    {
      id: 6,
      title: "Project Six",
      image: placeholderImage,
      description: "This is a description of project six.",
      category: "private",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
              Design. Build. Learn. Repeat.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              Crafting digital experiences one line of code at a time
            </p>
          </div>

          <div className="relative w-72 md:w-96">
            <img
              src={imageOfMe}
              alt="Portrait of Iselin, frontend developer"
              className="w-full h-auto object-cover"
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
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My Projects
        </h1>
        <p className="text-center text-[#6B5A4E] mb-8 max-w-2xl mx-auto">
          A collection of projects showcasing my journey in frontend development
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-12">
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
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold">Hi everyone,</h1>
            <h2 className="text-2xl text-[#6B5A4E]">I'm Iselin!</h2>
            <p className="text-[#6B5A4E] leading-relaxed">
              I'm a frontend development student in my final semester...
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="bg-[#E7C098] rounded-3xl shadow-xl p-8 max-w-md w-full">
              <h2 className="text-2xl font-bold text-white mb-6">Fun Facts</h2>
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
    </div>
  );
}
