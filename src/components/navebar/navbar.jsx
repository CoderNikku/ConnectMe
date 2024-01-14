import React, { useState } from "react";
import "./nav.css";
import logo from "../wallpaper/logo.png";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px;

    .nav{
        display:flex;
    }
  .nav-logo img {
    background-color:white;
    width: 100px; /* Adjust as needed */
  }

  .nav-item {
    display: flex;
    list-item:center;
  }

  ul {
    list-style: none;
    display: flex;
  }

  li {
    margin-right: 20px;
    font-size:25px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  /* Hamburger menu for smaller screens */
  @media (max-width: 768px) {
    .nav-item {
      flex-direction: column;
    }

    ul {
      flex-direction: column;
      align-items: center;
    }

    li {
      margin: 10px 0;
    }
  }
`;

const Navbar = () => {
    const [menu, setMenu] = useState("");
    const navigate = useNavigate();

    const handleDropdownSelect = (selectedMenu) => {
        setMenu(selectedMenu);
        // Navigate to the corresponding route
        navigate(`/${selectedMenu.toLowerCase()}`);
    };

    return (
        <NavbarContainer>
            <nav>
                <div className="nav">
                    <div className="nav-logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="nav-item">
                        <ul>
                            <li onClick={() => setMenu("home")}>
                                <Link to="/">Home</Link>
                                {menu === "home" && <span> (active)</span>}
                            </li>
                            <li>
                                <select name="select" id="select" onChange={(e) => handleDropdownSelect(e.target.value)}>
                                    <option value=""></option>
                                    <option value="about">About</option>
                                    <option value="education">Education</option>
                                    <option value="experience">Experience</option>
                                    <option value="skills">Skills</option>
                                    <option value="projects">Projects</option>
                                </select>
                                {menu === "education" && <span> (active)</span>}
                            </li>
                            <li onClick={() => setMenu("contact")}>
                                <Link to="/contact">Contact</Link>
                                {menu === "contact" && <span> (active)</span>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </NavbarContainer>
    );
};

export default Navbar;
