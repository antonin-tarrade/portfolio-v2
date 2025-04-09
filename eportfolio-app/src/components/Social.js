import React, { useEffect, useState } from 'react';
import './Social.css';

const Social = ({ name, link, svgPath }) => {
    const [svgContent, setSvgContent] = useState('');

    useEffect(() => {
        const fetchSvg = async () => {
            try {
                const response = await fetch(`/icons/${svgPath}`);
                const svgText = await response.text();
                setSvgContent(svgText);
            } catch (error) {
                console.error(`Error fetching SVG: ${svgPath}`, error);
            }
        };

        fetchSvg();
    }, [svgPath]);

    return (
        <a className="social" href={link} target="_blank" rel="noopener noreferrer">
            <div className="icon" dangerouslySetInnerHTML={{ __html: svgContent }} />
            <p>{name}</p>
        </a>
    );
};

export default Social;
