import React from "react";
import "../exprience/exprience.css"; // Import the CSS file

const Experience = () => {
  return (
    <div>
        <h2 align="center">My Work Exprience</h2>
    <div className="experience">
      <div className="oftmind">
        <p>Company: Softmind Infotech Pvt. Ltd.</p>
        <p>Duration: 3 Months (Internship)</p>
        <p>Role: React.js Developer</p>
        <p>Technology: React.js, Node.js, MongoDB, Express.js</p>
        <p>Address: Noida Sector-4, Near Metro-15, Uttar Pradesh</p>
      </div>
      <div className="inventia">
        <p>Company: Inventia Technology Consultance Pvt. Ltd.</p>
        <p>Duration: 7 Months (Trainee)</p>
        <p>Role: Python Developer</p>
        <p>Technology: Python, Machine Learning, Data Analysis, etc.</p>
        <p>Address: Noida Sector-67, Uttar Pradesh</p>
      </div>
      <div className="cetpa">
        <p>Company: CETPA Infotech Pvt. Ltd.</p>
        <p>Duration: 6 Months (Internship)</p>
        <p>Role: Python (Django)</p>
        <p>Technology: Python, Django, HTML, CSS, JavaScript</p>
        <p>Address: Noida Sector-2, Uttar Pradesh</p>
      </div>
    </div>
    </div>
  );
};

export default Experience;
