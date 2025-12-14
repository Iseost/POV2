import { useParams, Link } from "react-router-dom";
import placeholderImage from "../assets/image.png";
import auctionHouseImage from "../assets/auctionHouse.png";
import brightCartImage from "../assets/brightCart.png";
import mmfImage from "../assets/mmf.png";
import mortogise from "../assets/mortogise.png";

export default function ProjectDetail() {
  const { id } = useParams();

  // Define all your projects with full details
  const projects = {
    1: {
      id: 1,
      title: "Auction House",
      image: auctionHouseImage,
      category: "school",
      description:
        "A full-featured auction house platform built as a semester project. This application allows users to create auctions, place bids, and manage their listings in real-time.",
      longDescription:
        "The Auction House project was developed as part of my second semester at Noroff. It showcases a complete e-commerce auction system where users can register, create listings, bid on items, and track their auction activity. The platform includes user authentication, real-time bid updates, and a responsive design that works seamlessly across all devices.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "API Integration"],
      features: [
        "User authentication and profile management",
        "Create and manage auction listings",
        "Real-time bidding system",
        "Search and filter functionality",
        "Responsive design for all devices",
      ],
      challenges:
        "One of the main challenges was implementing real-time bid updates and ensuring data consistency across multiple users. I also focused on creating an intuitive user experience for the bidding process.",
      learnings:
        "This project taught me a lot about state management in React, working with APIs, and handling real-time data updates. I also improved my skills in designing user-friendly interfaces for complex interactions.",
      githubLink: "https://github.com/yourusername/auction-house",
      liveLink: "https://auction-house-demo.netlify.app",
    },
    2: {
      id: 2,
      title: "BrightCart",
      image: brightCartImage,
      category: "school",
      description:
        "An e-commerce shopping cart application developed for the JavaScript Frameworks course.",
      longDescription:
        "BrightCart is a modern e-commerce application that demonstrates proficiency in React and state management. The application features a clean, intuitive interface for browsing products, adding items to cart, and completing purchases. Built with performance and user experience in mind.",
      technologies: ["React", "JavaScript", "CSS Modules", "Context API"],
      features: [
        "Product browsing and filtering",
        "Shopping cart functionality",
        "Checkout process",
        "Product search",
        "Responsive design",
      ],
      challenges:
        "Managing cart state across multiple components and implementing smooth animations for cart interactions were key challenges that helped me grow as a developer.",
      learnings:
        "I gained deeper understanding of React Context API, custom hooks, and component composition patterns. This project also improved my CSS skills for creating smooth user interactions.",
      githubLink: "https://github.com/yourusername/brightcart",
      liveLink: "https://brightcart-demo.netlify.app",
    },
    3: {
      id: 3,
      title: "CSS Frameworks",
      image: placeholderImage,
      category: "school",
      description:
        "A project exploring various CSS frameworks and modern styling approaches.",
      longDescription:
        "This project was an exploration of different CSS frameworks including Bootstrap, Tailwind CSS, and CSS-in-JS solutions. The goal was to understand the strengths and use cases of each approach and develop proficiency in modern styling techniques.",
      technologies: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "Sass"],
      features: [
        "Responsive layouts",
        "Component library",
        "Custom theme implementation",
        "Utility-first CSS approach",
        "Cross-browser compatibility",
      ],
      challenges:
        "Understanding the trade-offs between different frameworks and deciding when to use each approach was a valuable learning experience.",
      learnings:
        "I developed a strong foundation in CSS frameworks and learned to choose the right tool for specific project requirements. This knowledge has been invaluable in all my subsequent projects.",
      githubLink: "https://github.com/yourusername/css-frameworks",
      liveLink: "https://css-frameworks-demo.netlify.app",
    },
    4: {
      id: 4,
      title: "MMF - musikkforandrerliv",
      image: mmfImage,
      category: "school",
      description:
        "A collaborative project with all Frontend Development students at Noroff.",
      longDescription:
        "MMF (Musikk Forandrer Liv - Music Changes Lives) was a large-scale collaborative project involving all frontend development students at Noroff. The project aimed to create a platform showcasing how music impacts lives and brings communities together. Working in a team environment taught me valuable lessons about code collaboration, version control, and communication.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Git", "Figma"],
      features: [
        "Collaborative team development",
        "Component-based architecture",
        "Responsive design system",
        "Git workflow with multiple contributors",
        "Design system implementation",
      ],
      challenges:
        "Coordinating with a large team, managing merge conflicts, and maintaining code consistency across multiple developers were significant challenges that taught me professional development practices.",
      learnings:
        "This project was invaluable for learning team collaboration, professional Git workflows, code reviews, and effective communication in a development team. I also learned how to work with design systems and maintain code quality in a collaborative environment.",
      githubLink: "https://github.com/noroff/mmf",
      liveLink: "https://mmf-project.netlify.app",
    },
    5: {
      id: 5,
      title: "Morten + Iselin",
      image: mortogise,
      category: "private",
      description:
        "A personal wedding invitation website designed and built for my own wedding.",
      longDescription:
        "This was a special personal project where I designed and developed a custom wedding invitation website. The site features interactive elements, RSVP functionality, and all the information guests needed for our wedding day. It was a joy to combine my technical skills with such a meaningful personal event.",
      technologies: ["React", "JavaScript", "CSS", "Responsive Design"],
      features: [
        "Interactive invitation design",
        "RSVP system",
        "Event details and timeline",
        "Photo gallery",
        "Mobile-first responsive design",
        "Custom animations and interactions",
      ],
      challenges:
        "Balancing creative design with functionality while ensuring the site worked perfectly for all our guests across different devices and browsers.",
      learnings:
        "This project allowed me to explore creative web design and animations while building something deeply personal. It reinforced the importance of user testing with real users (our wedding guests!) and taught me to think about accessibility and usability from a personal perspective.",
      githubLink: "https://github.com/yourusername/wedding-site",
      liveLink: "https://mortenogiselin.no",
    },
  };

  const project = projects[id];

  if (!project) {
    return (
      <div>
        <div>
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Projects
          </Link>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      </div>
      <div>
        <div>
          <img
            src={project.image || placeholderImage}
            alt={project.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = placeholderImage;
            }}
          />
        </div>
      </div>
      <div>
        <div>
          <div>
            <section>
              <h2>Overview</h2>
              <p>{project.longDescription}</p>
            </section>
            <section>
              <h2>Key Features</h2>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>
                    <span>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2>Challenges</h2>
              <p>{project.challenges}</p>
            </section>
            <section>
              <h2>What I Learned</h2>
              <p>{project.learnings}</p>
            </section>
          </div>
          <div>
            <div>
              <h3>Technologies</h3>
              <div>
                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
            <div>
              <h3>Category</h3>
              <span>
                {project.category === "school"
                  ? "School Project"
                  : "Personal Project"}
              </span>
            </div>
            <div>
              <h3>Links</h3>
              <div>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-5 h-5"
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
                  >
                    <svg
                      className="w-5 h-5"
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
          </div>
        </div>
      </div>
    </div>
  );
}
