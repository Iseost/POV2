import { useParams, Link } from "react-router-dom";
import placeholderImage from "../assets/image.png";
import { auctionHouseImage } from "../assets/images";
import {
  brightCartImage,
  brightCartImage1,
  brightCartImage2,
} from "../assets/images";
import { mortogise, weddingLogo, weddingInfo } from "../assets/images";
import { mmfImage } from "../assets/images";

export default function ProjectDetail() {
  const { id } = useParams();

  // Define all your projects with full details
  const projects = {
    1: {
      id: 1,
      title: "Auction House",
      image: auctionHouseImage,
      subtitle: "Semester project 2",
      category: "school",
      description:
        "A full-featured auction house platform built as a semester project. This application allows users to create auctions, place bids, and manage their listings in real-time. The Auction House project was developed as part of my second semester at Noroff. It showcases a complete e-commerce auction system where users can register, create listings, bid on items, and track their auction activity.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "API Integration"],
      githubLink: "https://github.com/yourusername/auction-house",
      liveLink: "https://auction-house-demo.netlify.app",
      images: [auctionHouseImage, placeholderImage, placeholderImage],
    },
    2: {
      id: 2,
      title: "BrightCart",
      image: brightCartImage,
      subtitle: "JavaScript Frameworks Course",
      category: "school",
      description:
        "BrightCart is a simple yet polished e-commerce application built with React, designed to showcase the core concepts and skills gained through working with JavaScript frameworks. The application features a clean and intuitive user interface for searching products, managing a shopping cart, and completing purchases",
      technologies: ["React", "JavaScript", "Vite", "Tailwind CSS"],
      githubLink: "https://github.com/Iseost/online-store-assigment",
      liveLink: "https://effortless-gumdrop-3a143f.netlify.app/",
      images: [brightCartImage, brightCartImage1, brightCartImage2],
    },
    3: {
      id: 3,
      title: "CSS Frameworks",
      image: placeholderImage,
      subtitle: "Framework exploration project",
      category: "school",
      description:
        "A project exploring various CSS frameworks and modern styling approaches. This project was an exploration of different CSS frameworks including Bootstrap, Tailwind CSS, and CSS-in-JS solutions. The goal was to understand the strengths and use cases of each approach.",
      technologies: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "Sass"],
      githubLink: "https://github.com/yourusername/css-frameworks",
      liveLink: "https://css-frameworks-demo.netlify.app",
      images: [placeholderImage, placeholderImage, placeholderImage],
    },
    4: {
      id: 4,
      title: "MMF - musikkforandrerliv",
      image: mmfImage,
      subtitle: "Collaborative team project",
      category: "school",
      description:
        "A collaborative project with all Frontend Development students at Noroff. MMF (Musikk Forandrer Liv - Music Changes Lives) was a large-scale collaborative project involving all frontend development students. The project aimed to create a platform showcasing how music impacts lives and brings communities together.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Git", "Figma"],
      githubLink: "https://github.com/noroff/mmf",
      liveLink: "https://mmf-project.netlify.app",
      images: [mmfImage, placeholderImage, placeholderImage],
    },
    5: {
      id: 5,
      title: "Morten + Iselin",
      image: mortogise,
      subtitle: "The wedding invitation",
      category: "private",
      description:
        "A personal hobby project where I designed and built a wedding invitation website for my own wedding. This was a special personal project where I designed and developed a custom wedding invitation website. The site features interactive elements, RSVP functionality, and all the information guests needed for our wedding day.",
      technologies: ["JavaScript", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/wedding-site",
      liveLink: "https://mortenogiselin.no",
      images: [mortogise, weddingLogo, weddingInfo],
    },
  };

  const project = projects[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FAF7F3] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#3A2A20] mb-4">
            Project Not Found
          </h1>
          <p className="text-[#6B5A4E] mb-8">
            The project you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F3]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#7B513A] mb-2 mt-10">
            {project.title}
          </h1>
          <p className="text-lg text-[#6B5A4E] mb-8">{project.subtitle}</p>

          <div className="grid md:grid-cols-2 gap-8 pb-8 pt-8 border-b-2 border-t-2 border-[#E8E0D5]">
            {/* Left Column */}
            <div>
              <h3 className="text-sm font-semibold text-[#7B513A] mb-3">
                Technologies:
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#E7C098]/40 text-[#7B513A] rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-sm font-semibold text-[#7B513A] mb-3">
                Links:
              </h3>
              <div className="space-y-2">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#7B513A] hover:text-[#5A3A2A] transition-colors text-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View on GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#7B513A] hover:text-[#5A3A2A] transition-colors text-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    View Live Site
                  </a>
                )}
              </div>
            </div>

            {/* Right Column - Description */}
            <div>
              <h3 className="text-sm font-semibold text-[#7B513A] mb-3">
                Description
              </h3>
              <p className="text-[#6B5A4E] text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Two images side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#E8E0D5] rounded-2xl overflow-hidden aspect-square">
              <img
                src={project.images[0] || placeholderImage}
                alt={`${project.title} screenshot 1`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholderImage;
                }}
              />
            </div>
            <div className="bg-[#E8E0D5] rounded-2xl overflow-hidden aspect-square">
              <img
                src={project.images[1] || placeholderImage}
                alt={`${project.title} screenshot 2`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholderImage;
                }}
              />
            </div>
          </div>

          {/* One large image below */}
          <div className="bg-[#E8E0D5] rounded-2xl overflow-hidden aspect-video">
            <img
              src={project.images[2] || placeholderImage}
              alt={`${project.title} screenshot 3`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = placeholderImage;
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
