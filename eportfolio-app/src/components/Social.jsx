import React, { useEffect, useState } from 'react';
import './Social.css';
import { fetchSvg } from "../utils";
const Social = ({ name, link, svgPath }) => {
    const [svgContent, setSvgContent] = useState('');

    useEffect(() => {
        const getSvg = async () => {
            const svg = await fetchSvg(svgPath);
            setSvgContent(svg);
        }
        getSvg();
    }, [svgPath]);

    return (
        <a className="social" href={link} target="_blank" rel="noopener noreferrer">
            <div className="icon" dangerouslySetInnerHTML={{ __html: svgContent }} />
            <p>{name}</p>
        </a>
    );
};

export default Social;
