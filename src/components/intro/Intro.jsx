import React from "react";
import Typed from "typed.js";
import profile from "../../image/2517915.jpg";
import "./intro.css";
import { Box, Button, Heading, Text, Image } from "@chakra-ui/react";
import resume from "../../resume/resume.pdf";

function Introd() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Aspairing Developer.",
        "Aspiring Web Developer.",
        "Aspiring Programmer.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      loopCount: Infinity,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section className="intro">
        <Box className="introContent">
          <h1>Hi, I'm Abhinaba</h1>
          <Heading
            as="h2"
            size={{ base: "xl", md: "2xl", lg: "3xl", xl: "4xl" }}
          >
            I'm a{" "}
            <Text
              as="span"
              margin={{
                base: " 1rem 0",
                md: " 2rem 0",
                lg: " 3rem 0",
                xl: " 4rem 0",
              }}
              style={{ color: "teal" }}
              ref={el}
            ></Text>
          </Heading>
          <Text as="p">
            <Text
              as="span"
              size={{ base: "xl", md: "2xl", lg: "3xl", xl: "4xl" }}
            >
              Front-end developer fresher with a passion for building beautiful
              and user-friendly interfaces.
            </Text>
          </Text>
          <Button className="button-29" mt={"2rem"}>
            <a
              download={"Abhinaba-jana-Resume.pdf"}
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1UyNub2nL17zdUuF4ENFrLBDG1WEA2F8-/view?usp=sharing",
                  "_blank"
                );
              }}
              href={resume}
            >
              Download My Resume
            </a>

          </Button>
        </Box>
        <Image
          w={{ base: "50%", md: "50%", lg: "50%", xl: "30%" }}
          m={{ base: "6", md: "6", lg: "6", xl: "6" }}
          src={profile}
          alt=""
          className="bg"
        />
      </section>
      <Box
        as="section"
        flex={{ base: "1", md: "1", lg: "1", xl: "1" }}
        className="logos"
      >
        <Heading
          as="h3"
          margin={{ base: "1rem 0", md: "2rem 0", lg: "3rem 0", xl: "4rem 0" }}
          size={{ base: "xl", md: "2xl", lg: "3xl", xl: "2xl" }}
        >
          Contact Me:
        </Heading>
        <Box className="logoContaner">
          <Text
            _hover={{
              cursor: "pointer",
              backgroundColor: "teal",
              borderRadius: "10px",
            }}
            as={"a"}
            href="https://github.com/abhinaba1999"
            target="_blank"
          >
            <Image
              w={{ base: "10", md: "20", lg: "30", xl: "10" }}
              src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
            />
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              backgroundColor: "teal",
              borderRadius: "10px",
            }}
            as={"a"}
            href="https://www.linkedin.com/in/abhinaba-jana-45461327a/"
            target="_blank"
          >
            <Image
              w={{ base: "10", md: "20", lg: "30", xl: "10" }}
              src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"
            />
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Introd;
