import React from 'react';
import './WipHeader.css';
const WipHeader = () => {
	return (
		<header className="WIP-header">
			<h1 className="WIP-title">Work In Progress</h1>
			<p className = "WIP-text">This website is under construction. Stay tuned!</p>
            <a
                className="WIP-link"
                href="https://antonin-tarrade.github.io"
                target="_blank"
                rel="noopener noreferrer"
            >
          Visit my previous website
        </a>
		</header>
	);
};



export default WipHeader;