import React from "react";
import Js from "./image/js.png";
import Html from "./image/html-5.png";
import Css from "./image/css.png";
import Nodejs from "./image/nodejs.png";
import Reactjs from "./image/react.png";
import github from "./image/github.png";
import "./skill.css";
import { Box, Text, Image, Heading } from "@chakra-ui/react";

function Skill() {
  const imageGroups = [Js, Html, Css, Nodejs, Reactjs];
  const textGroups=["Javascript", "HTML", "CSS", "Nodejs", "Reactjs"];
  return (
    <Box as="div" className="appContainer">
      <Box as="div" className="wrapper">
        <Box className="skill">
          <Heading as="h1" size="2xl">
            Skills
          </Heading>
        </Box>
        <main className="marquee">
          <Box className="marqueeGroup">
            {imageGroups.map((image, index) => (
              <Box className="imageGroup">
                <Image key={index} src={image} alt="js logo" />
                <Text key={index} as={"p"}>
                  {textGroups[index]}
                </Text>
              </Box>
            ))}
          </Box>
          <Box className="marqueeGroup">
            {imageGroups.map((image, index) => (
              <Box className="imageGroup">
                <Image key={index} src={image} alt="js logo" />
                <Text key={index} as={"p"}>
                  {textGroups[index]}
                </Text>
              </Box>
            ))}
          </Box>
        </main>
      </Box>
    </Box>
  );
}

export default Skill;
