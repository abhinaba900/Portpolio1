import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedinIn, FaGithubSquare } from "react-icons/fa";
import { ImMobile } from "react-icons";
import { CiMobile3 } from "react-icons/ci";

function AnimatedContactForm() {
  return (
    <Box
      className="contact"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Box>
        <Heading>Contact Me :-</Heading>
      </Box>
      <Box
        w={{ base: "100%", md: "50%", lg: "50%", xl: "50%" }}
        display={{ base: "none", md: "flex", lg: "flex", xl: "flex" }}
        justifyContent={{
          base: "center",
          md: "space-evenly",
          lg: "space-evenly",
          xl: "space-evenly",
        }}
        m={"auto"}
        gap={4}
        marginBottom={"2rem"}
        marginTop={"2rem"}
      >
        <Box
          display={{ base: "none", md: "flex", lg: "flex", xl: "flex" }}
          w={{ base: "100%", md: "50%", lg: "50%", xl: "30%" }}
          gap={{ base: 2, md: 2, lg: 2, xl: 6 }}
          justifyContent={"space-evenly"}
        >
          <Box _hover={{ color: "blue" }} borderRadius={"5px"} cursor={"pointer"}>
            <FaLinkedinIn
              size={40}
              cursor={"pointer"}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/abhinaba-jana-45461327a/",
                  "_blank"
                )
              }
            />
          </Box>
          <Box borderRadius={"5px"} cursor={"pointer"} _hover={{ color: "blue" }}>
            <FaGithubSquare
              size={40}
              color={"black"}
              onClick={() =>
                window.open("https://github.com/abhinaba900", "_blank")
              }
            />
          </Box>
        </Box>
        <Box w={{ base: "100%", md: "50%", lg: "50%", xl: "40%" }}>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={2}
            justifyContent={"left"}
            w={"100%"}

          >
            <TfiEmail />
            <Text
              fontSize={{ base: "1rem", md: "1rem", lg: "1rem", xl: "1.2rem" }}
              as={"a"}
            >
              abhinabajana900@gmail.com
            </Text>
          </Box>
          <Box
            display={"flex"}
            gap={2}
            justifyContent={"left"}
            alignItems={"center"}
            w={"100%"}
            
          >
            <CiMobile3 />
            <Text
              
              fontSize={{ base: "1rem", md: "1rem", lg: "1rem", xl: "1.2rem" }}
            >
              +91 9831206232
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AnimatedContactForm;
