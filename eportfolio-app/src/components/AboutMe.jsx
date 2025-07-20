    import React from 'react';
    import './AboutMe.css';
    
    const AboutMe = () => {
        return (
            <div className="about-me">
                <div className="name">
                    <h1 className="name-title">ANTONIN TARRADE</h1>
                    <h2 className="name-subtitle">Student in Computer Science, Aspiring Game developer & Software developer</h2>
                </div>
                <div className="about"id="about">
                    <p className="about-text"> Currently completing my final year at ENSEEIHT (Toulouse, France), I am passionate about web technologies, 3D software making, and game development.
               
                    I am actively seeking a 6-month software development internship where I can apply my skills, gain hands-on experience, and contribute to innovative and impactful projects.</p>
                </div>

                <div className="project-button">
                    <a
                        className="project-scroll-link"
                        href="#projects-section"
                    >
                        My projects
                    </a>
                </div>
            </div>
        );
    };
        
    export default AboutMe;