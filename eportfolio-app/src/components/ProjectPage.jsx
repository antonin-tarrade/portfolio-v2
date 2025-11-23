import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSvg } from "../utils";
import projects from "../data/projects";
import "./ProjectPage.css";
import Tag from "./Tag.jsx";

const ProjectPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [leftArrowSVG, setLArrowSvgContent] = useState('');
    const [downArrowSVG, setDArrowSvgContent] = useState('');
    const [githubSVG, setGitHubSvgContent] = useState('');
    const [webSVG, setWebSvgContent] = useState('');

    const project = projects.find(p => p.slug === slug);

    useEffect(() => {
        const getSvg = async (path,setSvg) => {
            const svg = await fetchSvg(path);
            setSvg(svg);
        };
        getSvg("left-arrow-in.svg",setLArrowSvgContent);
        getSvg("down-arrow-in.svg",setDArrowSvgContent);
        getSvg("github.svg",setGitHubSvgContent);
        getSvg("web.svg",setWebSvgContent);
    }, []);

    if (!project) {
        return <div>Project not found.</div>;
    }

    return (
        <div className="project-page">
            <div 
                className="project-section" 
                style={{ backgroundImage: `url(/${project.cover})` }}
            >

        
                <div className="return-container">
                    <a
                        className="return-content"
                        href="/#"
                        onClick={e => {
                            e.preventDefault();
                            navigate('/');
                        }}
                    >
                    <div className="return-arrow" dangerouslySetInnerHTML={{ __html: leftArrowSVG }} />
                    <p className="return-text">Go back</p>
                    </a>
                </div>  

                <div>
                    <h1 className="project-title">{project.title}</h1>
                    <p className="project-description">{project.description}</p>
                    {project.tags && (
                        <div className="project-tags">
                            {project.tags.map((tagName) => (
                                <Tag key={tagName} icon={`/tags/${tagName}.png`} name={tagName} />
                            ))}
                        </div>
                    )}
                </div>

                <div>
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
                <div className="seemore-container">
                    <a
                        className="seemore-content"
                        href="#showcase"
                    >
                    <p className="seemore-text">See More</p>
                    <div className="seemore-arrow" dangerouslySetInnerHTML={{ __html: downArrowSVG }} />
                    </a>
                </div>  
            </div>
            
            <div className="project-showcase" id="showcase">
                    {project.videos.map(
                            (v,index) => 
                                <div className="showcase-item">
                                    <div className="video-item">
                                        <video key={index + "blur"} className="video-blur" autoPlay loop muted preload="auto">
                                            <source src={`/${v}`} type="video/mp4"/>
                                        </video>
                                        <video key={index + "footage"} className="video-footage" autoPlay loop muted preload="auto">
                                            <source src={`/${v}`} type="video/mp4"/>
                                        </video>
                                    </div>
                                </div>
                        )
                    }

                    {project.images.map(
                        (i, index) => 
                            <div key={index} className="showcase-item">
                                <img src={`/${i}`} className="image-footage" alt="showcase img"/>
                            </div>
                    )}

            </div>
        </div>
    );
};

export default ProjectPage;