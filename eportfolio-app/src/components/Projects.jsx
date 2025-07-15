import "./Projects.css";
import ProjectCard from "./ProjectCard.jsx";
import projects from "../data/projects";
import { useState } from "react";

const Projects = () => {

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedCategory, setSelectedCategory] = useState(null);


  const categoryList = ['All', ...new Set(projects.map(p => p.category))];


  const filterProjects = (category) => {
    return category === 'All' ? projects : projects.filter(project => project.category === category);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setFilteredProjects(filterProjects(category));
  };

  return (
    <div className="projects-section">
        <h1 className="projects-title">My Projects</h1>
        <div className="category-buttons">
            {categoryList.map(category => (
            <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={selectedCategory === category ? 'selected' : ''}
            >
                {category}
            </button>
            ))}
        </div>

        <div className="scroll-container">
        {filteredProjects.map(project => (
            <ProjectCard key={project.name} project={project} />
        ))}
        </div>
    </div>
  );
};

export default Projects;
