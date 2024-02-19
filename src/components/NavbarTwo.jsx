import React from "react";
import { Link } from "react-scroll";
import logo from "../image/logoImage.png";
import resume from "../resume/resume.pdf";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function NavbarTwo() {
  return (
    <Box display="flex" justifyContent="space-between" p={4} className="navbar">
      <Box>
        <Image className="logo" src={logo} alt="Logo" />
      </Box>
      <Menu>
        <MenuButton
          as={Button}
          colorScheme="teal"
          border={"2px solid white"}
          variant="outline"
        >
          <HamburgerIcon color={"white"} />
        </MenuButton>
        <MenuList>
          {[
            "intro",
            "about",
            "education",
            "skill",
            "statistics",
            "project",
            "contact",
          ].map((section) => (
            <Link
              to={section}
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
              activeClass="active"
              className="mobileMenuListItem"
              key={section}
            >
              <MenuItem key={section}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </MenuItem>
            </Link>
          ))}
          <MenuItem
            as="a"
            href={resume}
            download={"Abhinaba-jana-Resume.pdf"}
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1nKAW8qTic0jC3ieFbI-cZ9trXLL54FLM/view?usp=sharing",
                "_blank"
              );
            }}
            className="mobileMenuListItem"
          >
            Resume
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default NavbarTwo;
