import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectCard.css";
import Tag from "./Tag";

const ProjectCard = ({ project }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/project/${project.slug}`);
    };

    return (
        <div className="card-container" onClick={handleClick} style={{ cursor: "pointer" }}>
            <div className="card-preview">
                <img className="card-image" src={project.img} alt={"image of" + project.name}/>
            </div>
            <div className="card-info">
                <h2>{project.title}</h2>
                {project.tags && (
                    <div className="card-tags">
                        {project.tags.map((tag, index) => (
                            <Tag key={index} icon={tag.icon} name={tag.name} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;