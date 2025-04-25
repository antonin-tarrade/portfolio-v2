import React from "react";
import WipPlaceHolder from "./WipPlaceHolder";
import ProjectCard from "./ProjectCard";


const projects = [
    {
        title : "Test1",
        video: null,
        img: "logo512.png",
        tags : [
            {
                icon:"logo192.png",
                name:"tag1"
            },
            {
                icon:"logo192.png",
                name:"tag2"
            }
        ],
        github:"https://github.com/antonin-tarrade",
        link:""
    },
    {
        title : "Test2",
        video: null,
        img: "logo512.png",
        tags : [
            {
                icon:"logo192.png",
                name:"tag1"
            },
            {
                icon:"logo192.png",
                name:"tag2"
            }
        ],
        github:"https://github.com/antonin-tarrade",
        link:""
    }
];


const Projects = () => {
    return (

        <div>
            <h1>Projects</h1>
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    video={project.video}
                    img={project.img}
                    tags={project.tags}
                    github={project.github}
                    link={project.link}
                />
            ))}
            {/* <WipPlaceHolder/> */}
        </div>
    )
}

export default Projects;