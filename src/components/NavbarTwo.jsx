import React from 'react';
import { Link } from 'react-scroll';
import logo from '../image/logoImage.png';
import resume from '../resume/resume.pdf';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
  Box,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

function NavbarTwo() {
  return (
    <Box display="flex" justifyContent="space-between" p={4} className="navbar">
      <Image className="logo" src={logo} alt="Logo" />
      <Menu>
        <MenuButton as={Button} colorScheme="pink" variant="outline">
          <HamburgerIcon />
        </MenuButton>
        <MenuList>
          {["intro", "about", "education", "skill", "project", "contact"].map(
            (section) => (
                <Link
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}
                  activeClass="active"
                  className="mobileMenuListItem"
                >
              <MenuItem key={section}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
              </MenuItem>
                </Link>
            )
          )}
          <MenuItem
            as="a"
            href={resume}
            download={"Abhinaba-jana-Resume.pdf"}
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1uBgffV5MAq5LW80ColbWqOAARWg0ZdL0/view?usp=sharing",
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