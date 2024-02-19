import logo from "../image/logoImage.png";
import { Link } from "react-scroll";
import { Box, Image } from "@chakra-ui/react";
import Resume from "../resume/resume.pdf";
import "./Navbar.css";
import Introd from "./intro/Intro";
import About from "./about/About";
import Skill from "./skills/skill";
import Project from "./projects/project";
import Contact from "./contact/contact";
import Education from "./about/Education";
import NavbarTwo from "./NavbarTwo";
import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import Statisticks from "./statisticks/Statisticks";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  

 
  
  useEffect(() => {
    const matcher = window.matchMedia("(max-width: 768px)");
  
    const handleChange = () => {
      setIsMobile(matcher.matches);
    };
  
    // Call handleChange immediately to set initial state
    handleChange();
  
    // Add event listener
    matcher.addListener(handleChange);
  
    // Cleanup function
    return () => matcher.removeListener(handleChange);
  }, []);

  return (
    <Box className="App-header">
      {!isMobile ? (
        <Box as="nav" backgroundColor={"teal.600"} p={4} className="navbar">
          <Box className="logoBox">
            <Image className="logo" src={logo} alt=" logo" />
          </Box>
          <Box className="decstopmenu">
            <Link
              to="intro"
              offset={-150}
              spy={true}
              smooth={true}
              duration={100}
              activeClass="active"
              isDynamic={true}
              className="desktopMenuListItem"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={100}
              activeClass="active"
              className="desktopMenuListItem"
            >
              About
            </Link>
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={-150}
              duration={100}
              activeClass="active"
              className="desktopMenuListItem"
            >
              Education
            </Link>
            <Link
              to="skill"
              spy={true}
              offset={-250}
              smooth={true}
              duration={100}
              activeClass="active"
              className="desktopMenuListItem"
            >
              Skill
            </Link>
            <Link
              to="statistics"
              spy={true}
              offset={-120}
              smooth={true}
              duration={100}
              activeClass="active"
              className="desktopMenuListItem"
            >
              Statistics
            </Link>
            <Link
              to="project"
              spy={true}
              offset={-120}
              smooth={true}
              duration={100}
              activeClass="active"
              className="desktopMenuListItem"
            >
              Project
            </Link>
            <Link
              to="contact"
              spy={true}
              offset={-150}
              smooth={true}
              duration={100}
              activeClass="active"
              className="desktopMenuListItem"
            >
              Contact
            </Link>
            <Text
              as="a"
              href={Resume}
              download={"Abhinaba-jana-Resume.pdf"}
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1nKAW8qTic0jC3ieFbI-cZ9trXLL54FLM/view?usp=sharing",
                  "_blank"
                );
              }}
              className="desktopMenuListItem resume"
            >
              Resume
            </Text>
          </Box>
        </Box>
      ) : (
        <NavbarTwo />
      )}

      <Introd />
      <About />
      <Education />
      <Skill />
      <Statisticks />
      <Project />
      <Contact />
      <footer
        style={{
          textAlign: "center",
          padding: "10px",
          color: "white",
          backgroundColor: "black",
          width: "100%",
          bottom: 0,
        }}
      >
        <Text> © 2023 Abhinaba. All rights reserved </Text>
      </footer>
    </Box>
  );
}

export default Navbar;

