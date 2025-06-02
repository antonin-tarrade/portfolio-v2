import React from "react";
import Social from "./Social";
import "./Footer.css";

const socials = [
    {
        name: "Github",
        svgPath: "github.svg",
        link: "https://github.com/antonin-tarrade",
    },
    {
        name: "Linkedin",
        svgPath: "linkedin.svg",
        link: "https://www.linkedin.com/in/antonin-tarrade-5700a8252/",
    },
    {
        name: "Mail",
        svgPath: "email.svg",
        link: "mailto:antonin.tarrade@etu.toulouse-inp.fr",
    }
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="socials">
                
            {socials.map((social, index) => (
                <Social
                    key={index}
                    name={social.name}
                    link={social.link}
                    svgPath={social.svgPath}
                />
            ))}
            </div>
            <div className="footer-text-container">
                <p className="footer-text">
                    © 2025 Antonin Tarrade. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;