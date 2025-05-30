import React, { useEffect,useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import WipPlaceHolder from "./WipPlaceHolder";
import { fetchSvg } from "../utils";
import "./ProjectPage.css";


const ProjectPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const project = location.state?.project;
    const [arrowSVG,setSvgContent] = useState('');

        useEffect(() => {
            const getSvg = async () => {
                const svg = await fetchSvg("left-arrow-in.svg");
                setSvgContent(svg);
            }
            getSvg();
        }, []);
    

    if (!project) {
        return <div>Project not found.</div>;
    }

    return (
        <div className ="return-container">
            <a 
                className="return-content"
                href="/#"
                onClick={() => navigate(-1)}
            >
            <div className="return-arrow" dangerouslySetInnerHTML={{ __html: arrowSVG  }} />
            <p className="return-text"> Go back </p>
            </a>
            <WipPlaceHolder/>
        </div>
    );
};

export default ProjectPage;