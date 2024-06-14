import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import image1 from "./Costco/Screenshot 2024-02-19 191850.png";
import image3 from "./Costco/Screenshot 2024-02-19 191912.png";
import "./project.css";
import airtable1 from "./AirtableImage/airtable1.png";
import airtable2 from "./AirtableImage/airtable2.png";
import { Tag, UnorderedList, ListItem } from "@chakra-ui/react";
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
        <Box className="projectContent1">
          <Image src={mainImage} />
          <Heading
            fontSize={{ base: "20px", md: "24px", lg: "28px" }}
            as={"h3"}
          >
            Replica of Costco.com
          </Heading>
          <Text fontSize={{ base: "14px", md: "16px", lg: "18px" }} as={"p"}>
            <UnorderedList>
              <ListItem>
                Using advanced HTML, CSS, JavaScript, and web frameworks, I
                accurately recreated Costco's website.
              </ListItem>
              <ListItem>
                Focused on the layout, navigation, and interactive elements.
              </ListItem>
              <ListItem>
                Emphasized mobile responsiveness and cross-browser
                compatibility.
              </ListItem>
            </UnorderedList>
          </Text>
          <Text fontSize={{ base: "14px", md: "16px", lg: "18px" }} as={"h4"}>
            Tech Stack :
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "18px" }}
              as={"span"}
            >
              {" "}
              <Tag
                size={"lg"}
                variant={"solid"}
                colorScheme="blue"
                mb={"1rem"}
                mr={"1rem"}
              >
                HTML5
              </Tag>{" "}
              <Tag
                size={"lg"}
                variant={"solid"}
                colorScheme="blue"
                mb={"1rem"}
                mr={"1rem"}
              >
                CSS3
              </Tag>
              <Tag
                size={"lg"}
                variant={"solid"}
                colorScheme="blue"
                mb={"1rem"}
                mr={"1rem"}
              >
                JavaScript
              </Tag>
              <Tag
                size={"lg"}
                variant={"solid"}
                colorScheme="blue"
                mb={"1rem"}
                mr={"1rem"}
              >
                ReactJS
              </Tag>
              <Tag
                size={"lg"}
                variant={"solid"}
                colorScheme="blue"
                mb={"1rem"}
                mr={"1rem"}
              >
                Express
              </Tag>
              <Tag
                size={"lg"}
                variant={"solid"}
                colorScheme="blue"
                mb={"1rem"}
                mr={"1rem"}
              >
                Mongo DB
              </Tag>
            </Text>
          </Text>
          <Text fontSize={{ base: "14px", md: "16px", lg: "18px" }} as={"p"}>
            <UnorderedList>
              <ListItem>
                <strong>Project:</strong> Costco Website Clone
              </ListItem>
              <ListItem>
                <strong>Duration:</strong> 8 days
              </ListItem>
              <ListItem>
                <strong>Description:</strong> A comprehensive solo project where
                I meticulously redesigned and developed the Costco website.
              </ListItem>
            </UnorderedList>
          </Text>
          <Box display={"flex"} gap={"1rem"}>
            <Button>
              <Text
                fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                as={"a"}
                target="_blank"
                href="https://github.com/abhinaba900/costco.com"
              >
                Sorce Code
              </Text>
            </Button>
            <Button>
              <Text
                fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                as={"a"}
                target="_blank"
                href="https://costco-com-i4c5.vercel.app/"
              >
                Live Demo
              </Text>
            </Button>
          </Box>
        </Box>
        <Box className="projectContent1">
          <Image src={airtable} />
          <Heading
            fontSize={{ base: "20px", md: "24px", lg: "28px" }}
            as={"h3"}
          >
            Replica of airtable.com
          </Heading>
          <Text fontSize={{ base: "14px", md: "16px", lg: "18px" }} as={"p"}>
            <UnorderedList>
              <ListItem>
                Revolutionizing work management with its dynamic blend of
                spreadsheet and database functionalities.
              </ListItem>
              <ListItem>
                Empowering seamless collaboration among team members.
              </ListItem>
              <ListItem>
                Enabling structured organization of data and tasks.
              </ListItem>
            </UnorderedList>
          </Text>
          <Text
            fontSize={{ base: "14px", md: "16px", lg: "18px" }}
            as={"h4"}
            lineHeight={"1.5"}
          >
            Tech Stack :
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "18px" }}
              as={"span"}
            >
              {" "}
              <Tag
                size={"lg"}
                variant={"solid"}
                colorScheme="blue"
                mr={"1rem"}
                mb={"1rem"}
              >
                HTML5
              </Tag>{" "}
              <Tag size={"lg"} variant={"solid"} colorScheme="blue" mr={"1rem"}>
                CSS3
              </Tag>{" "}
              <Tag size={"lg"} variant={"solid"} colorScheme="blue" mr={"1rem"}>
                JavaScript
              </Tag>{" "}
              <Tag size={"lg"} variant={"solid"} colorScheme="blue" mr={"1rem"}>
                React
              </Tag>{" "}
              <Tag size={"lg"} variant={"solid"} colorScheme="blue" mr={"1rem"}>
                Vite
              </Tag>{" "}
              <Tag size={"lg"} variant={"solid"} colorScheme="blue" mr={"1rem"}>
                Chakra UI
              </Tag>{" "}
            </Text>
          </Text>
          <Text fontSize={{ base: "14px", md: "16px", lg: "18px" }} as={"p"}>
            <UnorderedList>
              <ListItem>
                <strong>Project:</strong> Airtable Website Clone
              </ListItem>
              <ListItem>
                <strong>Duration:</strong> 8 days
              </ListItem>
              <ListItem>
                <strong>Description:</strong> Professional Airtable website
                clone developed diligently in just 8 days.
              </ListItem>
            </UnorderedList>
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
