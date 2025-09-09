import React, { forwardRef } from "react";
import "./Experience.css"
import Tag from "./Tag.jsx";
import { useNavigate } from "react-router-dom";


const Experience = forwardRef(({ experience }, ref) => {
     const navigate = useNavigate();

    const handleClick = (projectslug) => {
        navigate(`/project/${projectslug}`);
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        document.body.scrollTop = 0; // For Safari
    };
 
    return (
        <div className="experience-section">
            <div className="experience-point">
                <span className="dot" ref={ref}/>
                <div className="experience-header">
                    <img className="experience-logo" src={`icons/${experience.logo}`} alt={experience.company + " logo" }/>
                    <h1 className="experience-company">{experience.company}</h1> 
                </div>
            </div>
            <div className="experience-container">
                <div className="resume-header">
                    <h1>{experience.title}</h1>
                    <div className="resume-location">
                        <img className="location-icon" src="icons/pin.svg" alt="pin icon" />
                        <p>{experience.location}</p>
                    </div>
                </div>
                <h3>{`${experience.start} - ${experience.end}`}</h3>
                <h2>{experience.type}</h2>
                <p>{experience.description}</p>
                {experience.tags && (
                    <div className="experience-tags">
                        {experience.tags.map((tagName) => {
                            return (
                                <Tag key={tagName} icon={`/tags/${tagName}.png`} name={tagName} />
                            );
                        })}
                    </div>
                )}
                {experience.linkedProjects && (
                    <div>
                        <p>Linked projects :</p>
                        {experience.linkedProjects.map((projectName) => {
                            return <button className="project-button" onClick={()=> handleClick(projectName)}>{projectName}</button>
                        })}
                    </div>
                )}
            </div>
        </div>
    )
})



export default Experience;