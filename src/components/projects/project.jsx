import React from "react";
import "../projects/project.css"; // Import the CSS file

const Project = () => {
  return (
    <div>
        <h2 align="center">My projects</h2>
    <div className="projects">
      <div className="hospital">
        <p>Name: Hospital Management System</p>
        <p>Description: </p>
        <p>Technology: Python (Django), HTML, CSS, SQLite</p>
        <p>Team: Itself</p>
        <p>Tool: VSCode, SQLite databases</p>
      </div>
      <div className="ecommerce">
        <p>Name: E-Commerce Shopping Site</p>
        <p>Description: </p>
        <p>Technology: JavaScript (React.js), HTML, CSS, Node.js, MongoDB</p>
        <p>Team: Itself</p>
        <p>Tool: VSCode, MongoDB Database</p>
      </div>
    </div>
    </div>
  );
};

export default Project;
