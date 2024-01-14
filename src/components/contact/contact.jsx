import React from "react";
import '../contact/contact.css';
import mail from  '../wallpaper/gmail.png'
import whatsap from  '../wallpaper/whatsapp-color-icon.png'
import lindlin from  '../wallpaper/linkedin.png'
import connect from '../wallpaper/connect.jpg'





const Contact = () => {
    return (
        <div className="contact">
            <div className="fist">
                <div className="first-img">
                    <img src={connect} alt="" />
                </div>
                <div className="first-msg">
                    <h4>Connect TO Me...</h4>
                <p>Thank you for taking the time to explore my portfolio! I'm excited to connect with you. Whether you have questions, feedback, or just want to say hello, I'd love to hear from you. Feel free to reach out through any of my social accounts listed below. Your interest is truly appreciated, and I look forward to the opportunity to engage with you!</p>
                </div>
            </div>
            <div className="second">
                <li><a href="https://web.whatsapp.com/"><img src={whatsap} alt=""/>Whatsap:8126640633</a></li>
                <li><a href="https://gmail.com/"><img src={mail} alt="" />Mail:nirmallohiya999@gmil.com</a></li>
                <li><a href="https://www.linkedin.com/in/nirmal-lohiya-5552a1209/"><img src={lindlin} alt="" />Linkdln</a></li>
            </div>
        </div>
    )
}



export default Contact;