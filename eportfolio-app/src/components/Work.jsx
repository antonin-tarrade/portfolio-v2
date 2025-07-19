import React from "react";
import Experience from "./Experience";
import experiences from "../data/experiences.json"
import "./Work.css"
const Work = () => {
    return (

        <div className="work-section">
            <h1 className="work-title">Work experiences</h1>
            <div className="work-container">

                {experiences.map(experience => (
                    
                        <Experience key={experience.company} experience={experience} />
                    ))}
            </div>
        </div>
    )
}

export default Work;