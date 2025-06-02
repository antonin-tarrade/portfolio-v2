import { slugify } from "../utils";
import "./Projects.css"
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

// Gennerate a slug to be used as an url id
const projectsFull = projects.map(project => ({
  ...project,
  slug: slugify(project.title)
}));


const Projects = () => {
    return (

        <div>
            <h1>Projects</h1>
            <div className="scroll-container">
                {projectsFull.map((project, index) => (
                    <ProjectCard
                    key={index}
                    project={project}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects;