import React from "react";
import '../about/about.css'
import image from '../wallpaper/me.jpg';


const About = () => {
    return (
        <div>
            <div className="about">
                <div className="profileimg">
                    <img src={image} alt="" />
                </div>
                <div className="navbar">
                    <h3>hi i'm Nirmal</h3>
                    <p>Logging my journey from Pithoragarh in Uttarakhand, I am a dedicated Computer Science student with 7 months of hands-on working experience. My journey has been enriched by completing a comprehensive full-stack development internship project with Django, where I applied my skills to create robust and dynamic solutions.</p>
                    <p>My proficiency spans across various front-end and back-end languages, allowing me to craft seamless user experiences. Additionally, I have acquired in-depth knowledge of databases, including SQL, MySQL, MongoDB, and more, empowering me to design and implement efficient data solutions.</p>
                    <p>Every line of code written is a step forward in my learning journey. I am passionate about leveraging technology to solve real-world problems and keen on continuous growth. I look forward to new challenges and opportunities that will further shape my skills and contribute to my journey in the world of computer science.</p>
                </div>
            </div>
        </div>
    )
}
export default About;
