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
                    <p className="about-text"> I am a student in Computer Science at ENSEEIHT, France. I am currently in my second year of Engineer's degree.
                    
                    Passionate about video games since childhood and president of the video game development club of my school, I have been learning how to develop games for almost 2 years (and playing for more than 15 ).
                    I am also particularly interested in software and web development.
               
                    I am currently looking for a 6 months internship in the field of video games or software development to explore their respective professional world, as well as gain more experience.</p>
                </div>

                <div className="project-button">
                    <a
                        className="project-scroll-link"
                        href=""
                    >
                        My projects
                    </a>
                </div>
            </div>
        );
    };
        
    export default AboutMe;