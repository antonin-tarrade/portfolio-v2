import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSvg } from "../utils";
import projects from "../data/projects";
import "./ProjectPage.css";
import Tag from "./Tag";

const ProjectPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [arrowSVG, setSvgContent] = useState('');
    const [githubSVG, setGitHubSvgContent] = useState('');
    const [webSVG, setWebSvgContent] = useState('');


    // Find the project by slug
    const project = projects.find(p => p.slug === slug);

    useEffect(() => {
        const getSvg = async (path,setSvg) => {
            const svg = await fetchSvg(path);
            setSvg(svg);
        };
        getSvg("left-arrow-in.svg",setSvgContent);
        getSvg("github.svg",setGitHubSvgContent);
        getSvg("web.svg",setWebSvgContent);
    }, []);

    if (!project) {
        return <div>Project not found.</div>;
    }

    return (
        <div>
            <div 
                className="project-section" 
                style={{ backgroundImage: `url(/${project.img})` }}
            >

        
                <div className="return-container">
                    <a
                        className="return-content"
                        href="/#"
                        onClick={e => {
                            e.preventDefault();
                            navigate(-1);
                        }}
                    >
                    <div className="return-arrow" dangerouslySetInnerHTML={{ __html: arrowSVG }} />
                    <p className="return-text">Go back</p>
                    </a>
                </div>  

                <div>
                    <h1 className="project-title">{project.title}</h1>
                    <p className="project-description">{project.description}</p>
                    {project.tags && (
                        <div className="project-tags">
                            {project.tags.map((tag, index) => (
                                <Tag key={index} icon={tag.icon} name={tag.name} />
                            ))}
                        </div>
                    )}
                </div>


                <hr className="project-separator" />

                <div className="project-links">
                    {project.link && 
                        <a className="project-link"href={project.link}> 


                        <div className="link-icon" dangerouslySetInnerHTML={{ __html: webSVG }} />
                        
                        See Project
                        
                        </a>
                    }
                
                    
                    {project.github && 
                        <a className="project-link"href={project.github}> 
                        

                        <div className="link-icon" dangerouslySetInnerHTML={{ __html: githubSVG }} />

                        See Source Code

                        </a>
                    }

                </div>
            </div>
        </div>
    );
};

export default ProjectPage;