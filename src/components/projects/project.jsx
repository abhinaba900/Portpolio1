import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import image1 from "./SuperheroresumeImage/image1.png";
import image3 from "./SuperheroresumeImage/image3.png";
import "./project.css";
import airtable1 from "./AirtableImage/airtable1.png";
import airtable2 from "./AirtableImage/airtable2.png";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";
import { useEffect } from "react";

function Project() {
  const superheroImage = [image1, image3];
  const airtableImage = [airtable1, airtable2];
  const [airtable, setAirtable] = React.useState(airtableImage[0]);
  const [mainImage, setMainImage] = React.useState(superheroImage[0]);
  const [imageTitle, setImageTitle] = React.useState("Image 1 Title");
  const [imageDescription, setImageDescription] = React.useState(
    "Image 1 Description"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (mainImage === superheroImage[0]) {
        setMainImage(superheroImage[1]);
        setAirtable(airtableImage[1]);
        setImageTitle("Image 2 Title");
        setImageDescription("Image 2 Description");
      } else {
        setAirtable(airtableImage[0]);
        setMainImage(superheroImage[0]);
        setImageTitle("Image 1 Title");
        setImageDescription("Image 1 Description");
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [mainImage, superheroImage]);

  return (
    <Box className="project">
      <Heading
        textAlign={"center"}
        fontSize={{ base: "24px", md: "28px", lg: "42px" }}
        as={"h2"}
      >
        Projects
      </Heading>
      <Box className="projectContainer">
        <Box
          _hover={{
            boxShadow: "2xl",
            transform: "scale(1.1)",
            transition: "all 0.5s ease",
          }}
          className="projectContent1"
        >
          <Image src={mainImage} />
          <Heading
            fontSize={{ base: "20px", md: "24px", lg: "28px" }}
            as={"h3"}
          >
            Superhero Resume
          </Heading>
          <Text fontSize={{ base: "14px", md: "16px", lg: "18px" }} as={"p"}>
            Crafting a narrative of extraordinary accomplishments and valor,
            presenting the Superhero Resume—a testament to unparalleled
            expertise, valor, and unwavering dedication in safeguarding the
            world.
          </Text>
          <Text fontSize={{ base: "14px", md: "16px", lg: "18px" }} as={"h4"}>
            Tech Stack :
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "18px" }}
              as={"span"}
            >
              {" "}
              <Tag size={"lg"} variant={"solid"} colorScheme="blue">
                HTML5
              </Tag>{" "}
              <Tag size={"lg"} variant={"solid"} colorScheme="blue">
                CSS3
              </Tag>
            </Text>
          </Text>
          <Text fontSize={{ base: "14px", md: "16px", lg: "18px" }} as={"p"}>
            Professionally crafted: Superhero Resume, a solo project
            meticulously developed within a span of 4 hours.
          </Text>
          <Box display={"flex"} gap={"1rem"}>
            <Button>
              <Text
                fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                as={"a"}
                target="_blank"
                href="https://github.com/abhinaba900/superheroResume"
              >
                Sorce Code
              </Text>
            </Button>
            <Button>
              <Text
                fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                as={"a"}
                target="_blank"
                href="https://rococo-salamander-0aeabf.netlify.app/"
              >
                Live Demo
              </Text>
            </Button>
          </Box>
        </Box>
        <Box
          _hover={{
            boxShadow: "2xl",
            transform: "scale(1.1)",
            transition: "all 0.5s ease",
          }}
          className="projectContent1"
        >
          <Image src={airtable} />
          <Heading
            fontSize={{ base: "20px", md: "24px", lg: "28px" }}
            as={"h3"}
          >
            Replica of airtable.com
          </Heading>
          <Text fontSize={{ base: "14px", md: "16px", lg: "18px" }} as={"p"}>
            "Airtable: Revolutionizing work management with its dynamic blend of
            spreadsheet and database functionalities, empowering seamless
            collaboration and structured organization."
          </Text>
          <Text fontSize={{ base: "14px", md: "16px", lg: "18px" }} as={"h4"}>
            Tech Stack :
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "18px" }}
              as={"span"}
            >
              {" "}
              <Tag size={"lg"} variant={"solid"} colorScheme="blue">
                HTML5
              </Tag>{" "}
              <Tag size={"lg"} variant={"solid"} colorScheme="blue">
                CSS3
              </Tag>{" "}
              <Tag size={"lg"} variant={"solid"} colorScheme="blue">
                JavaScript
              </Tag>{" "}
              <Tag size={"lg"} variant={"solid"} colorScheme="blue">
                React
              </Tag>{" "}
              <Tag size={"lg"} variant={"solid"} colorScheme="blue">
                Vite
              </Tag>{" "}
              <Tag size={"lg"} variant={"solid"} colorScheme="blue">
                Chakra UI
              </Tag>{" "}
            </Text>
          </Text>
          <Text fontSize={{ base: "14px", md: "16px", lg: "18px" }} as={"p"}>
            Professional Airtable website clone developed diligently in just 8
            days.
          </Text>
          <Box display={"flex"} gap={"1rem"}>
            <Button>
              <Text
                fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                as={"a"}
                target="_blank"
                href="https://github.com/abhinaba1999/airtable.com"
              >
                Sorce Code
              </Text>
            </Button>
            <Button style={{}}>
              <Text
                fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                as={"a"}
                target="_blank"
                href="https://airtable-com-eight.vercel.app/"
              >
                Live Demo
              </Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Project;
