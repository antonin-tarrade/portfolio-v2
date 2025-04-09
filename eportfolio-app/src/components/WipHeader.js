import React from 'react';
import './WipHeader.css';
const WipHeader = () => {
	return (
		<header class="WIP-header">
			<h1 class="WIP-title">Work In Progress</h1>
			<p class = "WIP-text">This website is under construction. Stay tuned!</p>
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