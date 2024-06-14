import React from "react";
import "../about/About.css";

import MainImage from "../../image/profile.png";
import { Box, Text, Image, Heading } from "@chakra-ui/react";

function About() {
  return (
    <div>
      <section className="about">
        <h1> About Me </h1>
        <div>
          <div>
            <p style={{ fontWeight: "600" }}>
              <strong style={{ fontSize: "2rem", paddingBottom: "1rem" }}>
                Hi I'm Abhinaba
              </strong>{" "}
              <br />
              <strong style={{ fontSize: "1.5rem", paddingBottom: "1rem" }}>
                {"  "}
                Aspiring Full Stack Developer.{" "}
              </strong>{" "}
              <br />
              <br />
              As a dedicated full stack developer, I craft captivating user
              experiences with innovative web interfaces and robust backend
              solutions. Proficient in HTML, CSS, JavaScript, and server-side
              technologies, I specialize in creating responsive and visually
              appealing designs while ensuring efficient server performance.
              With expertise in frameworks like React, Vue.js, Node.js, and
              Express, I bring concepts to life with clean, efficient code. My
              portfolio showcases projects that blend creativity with
              functionality across the stack. I prioritize user-centric design,
              aiming for seamless interactions and engaging interfaces while
              maintaining secure, scalable backend systems. Eager to collaborate
              on challenging projects, I'm committed to delivering impactful
              digital experiences.
            </p>
          </div>
          <div>
            <img
              style={{ borderRadius: "50%", display: "block", margin: "auto" }}
              src={MainImage}
              alt="main image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
