import React from "react";
import "./Tag.css"
const Tag = ({icon,name}) => {
    return (
        <div className="tag-container">
            <img className="tag-icon" src={`/${icon}`} alt={name + "icon"}/>
            <p className="tag-name">{name}</p>
        </div>
    )
}
export default Tag;