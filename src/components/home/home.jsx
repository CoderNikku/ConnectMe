import React from "react";
import About from "../about/about";
import Education from "../education/education";
import Experience from "../exprience/exprience";
import Skill from "../skills/skills";
import Project from "../projects/project";



const Home = () => {
    return (
        <div>
            <About />
            <Education />
            <Experience />
            <Skill />
            <Project />
        </div>
    )
}



export default Home;