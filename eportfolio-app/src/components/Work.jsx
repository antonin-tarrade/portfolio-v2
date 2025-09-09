import React from "react";
import Timeline from "./Timeline.jsx";
import experiences from "../data/experiences.json";
import "./Work.css";

const Work = () => {
    return (
        <div className="work-section">
            <h1 className="work-title">Work experiences</h1>
            <Timeline experiences={experiences} />
        </div>
    );
};

export default Work;