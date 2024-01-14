import React from "react";
import "../skills/skills.css"; // Import the CSS file

const Skills = () => {
    return (
        <div>
            <h2 align="center">I have good knowledge in several programming languages and Tools.</h2>
            <div className="skills">
                <li data-level="80">HTML</li>
                <li data-level="75">CSS</li>
                <li data-level="90">Python</li>
                <li data-level="85">Django</li>
                <li data-level="70">JavaScript</li>
                <li data-level="60">React.js</li>
                <li data-level="65">Node.js</li>
                <li data-level="75">MongoDB</li>
                <li data-level="70">SQL</li>
            </div>
        </div>
    );
};

export default Skills;
