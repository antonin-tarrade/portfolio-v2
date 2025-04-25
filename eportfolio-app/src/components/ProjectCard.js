import React from "react";
import "./ProjectCard.css";
import Tag from "./Tag.js";

const ProjectCard = ({ title, video, img, tags, github, link }) => {
    return (
        <div className="card-container">
            <div className="card-preview">
                {video != null ? (
                    <video className="" autoPlay loop muted preload="auto">
                        <source src={video} type="video/mp4" />
                    </video>
                ) : (
                    <img src={img} alt="Project img" />
                )}
            </div>

            <div className="card-info">
                <h2>{title}</h2>
                {github != null && (
                    <a className="card-link" href={github} target="_blank" rel="noopener noreferrer">
                        <img src="github.svg" alt="Github" />
                    </a>
                )}
                {link != null && (
                    <a className="card-link" href={link} target="_blank" rel="noopener noreferrer">
                        <p>Link</p>
                    </a>
                )}
                {tags != null && (
                    <div className = "card-tags">
                        {tags.map((tag, index) => (
                            <Tag key={index} icon={tag.icon} name={tag.name} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;