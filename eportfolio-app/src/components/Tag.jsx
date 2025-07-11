import React from "react";
import "./Tag.css";
import {capitalizeFirst} from "../utils.js"

const displayNames = {
  cs: "C#",
};

const Tag = ({ icon, name }) => {
  const displayName = displayNames[name] || capitalizeFirst(name);
  return (
    <div className="tag-container">
      <img className="tag-icon" src={icon} alt={displayName + " icon"} />
      <p className="tag-name">{displayName}</p>
    </div>
  );
};

export default Tag;