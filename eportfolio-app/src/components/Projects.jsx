import "./Projects.css"
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";


const Projects = () => {
    return (

        <div>
            <h1>Projects</h1>
            <div className="scroll-container">
                {projects.map((project, index) => (
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