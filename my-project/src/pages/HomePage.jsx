import ProjectCard from "../components/ProjectCard";
import placeholderImage from "../assets/image.png";

export default function HomePage() {
  // Static project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Project One",
      image: placeholderImage,
      description:
        "This is a description of project one. It showcases amazing features and capabilities.",
    },
    {
      id: 2,
      title: "Project Two",
      image: placeholderImage,
      description:
        "This is a description of project two. Another fantastic project with great details.",
    },
    {
      id: 3,
      title: "Project Three",
      image: placeholderImage,
      description:
        "This is a description of project three. Demonstrating excellence in design and function.",
    },
    {
      id: 4,
      title: "Project Four",
      image: placeholderImage,
      description:
        "This is a description of project four. A beautiful showcase of modern development.",
    },
    {
      id: 5,
      title: "Project Five",
      image: placeholderImage,
      description:
        "This is a description of project five. Innovative solutions and creative implementation.",
    },
    {
      id: 6,
      title: "Project Six",
      image: placeholderImage,
      description:
        "This is a description of project six. Quality work with attention to detail.",
    },
  ];

  return (
    <div className="bg-[var(--bg-body)]">
      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--text-body)]">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
