import React from "react";
import "../education/education.css";

const Education = () => {
  return (
    <div>
    <h2 align="center">My education background is as follows</h2>
    <div className="education">
      <div className="btech">
        <p>Degree: B.Tech</p>
        <p>Institute: Nanhi Pari Seemant Institute Pithoragarh</p>
        <p>Passing Year: 2020</p>
        <p>Branch: Computer Science & Engineering</p>
        <p>Address: NPSIT Pithoragrah, Uttarakhand</p>
      </div>
      <div className="poly">
        <p>Diploma: Polytechnic</p>
        <p>Institute: Polytechnic College Dwarahat.</p>
        <p>Passing Year: 2017</p>
        <p>Branch: Computer Science & Engineering</p>
        <p>Address: Polytechnic Dwarahat (Almoda), Uttarakhand</p>
      </div>
      <div className="ba">
        <p>Degree: Bachelor Of Art</p>
        <p>Institute: P.G College Dwarahat</p>
        <p>Passing Year: 2017</p>
        <p>Address: P.G College Dwarahat (Almoda), Uttarakhand</p>
      </div>
    </div>
    </div>
  );
};

export default Education;
