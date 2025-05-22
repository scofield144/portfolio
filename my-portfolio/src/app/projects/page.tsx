import ProjectCard from '@/components/sections/ProjectCard';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Adapte - Web Site",
      description: "A website for Adapte, a nonprofit organization dedicated to providing tech solutions, education, and community support.",
      technologies: ["React", "Tailwind", "TypeScript"],
      image: "/api/placeholder/600/400", // Placeholder image
      projectUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Visa-Issuance",
      description: "A comprehensive visa issuance and tracking system with automated workflow management and application processing features.",
      technologies: ["Java", "NetBeans"],
      image: "/api/placeholder/600/400", // Placeholder image
      projectUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern, responsive personal portfolio website showcasing my skills, experience, and projects.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/api/placeholder/600/400", // Placeholder image
      projectUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">My Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical projects, applications, and development work.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}