/**
 * @copyright 2024 Shubham-Mi
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const projectsList = [
  {
    imgSrc: "/images/projects/project.jpg",
    title: "Project 1",
    tags: ["tag1", "tag2"],
    projectLink: "",
  },
  {
    imgSrc: "/images/projects/project.jpg",
    title: "Project 2",
    tags: ["tag1", "tag2"],
    projectLink: "",
  },
  {
    imgSrc: "/images/projects/project.jpg",
    title: "Project 3",
    tags: ["tag1", "tag2"],
    projectLink: "",
  },
  {
    imgSrc: "/images/projects/project.jpg",
    title: "Project 4",
    tags: ["tag1", "tag2"],
    projectLink: "",
  },
  {
    imgSrc: "/images/projects/project.jpg",
    title: "Project 5",
    tags: ["tag1", "tag2"],
    projectLink: "",
  },
  {
    imgSrc: "/images/projects/project.jpg",
    title: "Project 6",
    tags: ["tag1", "tag2"],
    projectLink: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="headline-2">Developer&apos;s Playground</h2>
        <p className="subtitle">Where I Practice, Build & Grow</p>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {projectsList.map((project, index) => (
            <ProjectCard
              key={index}
              imgSrc={project.imgSrc}
              title={project.title}
              tags={project.tags}
              projectLink={project.projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
