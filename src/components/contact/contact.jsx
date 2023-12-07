import React from "react";
import {
  Box,
  Input,
  Button,
  Stack,
  FormControl,
  FormLabel,
  useBreakpointValue,
  Heading,
  useToast,
} from "@chakra-ui/react";
import AnimatedContactForm from "./AnimatedContactForm";

function Contact() {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [name, setName] = React.useState("");
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://sheetdb.io/api/v1/wjwx53ee0wimx", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              id: "INCREMENT",
              Name: name,
              Email: email,
              Message: message,
              created_at: "DATETIME",
            },
          ],
        }),
      });
      let resJson = await res.json();
      if (res.status === 201) {
        toast({
          title: "Success!",
          description: "Your message has been sent!",
          status: "success",
          duration: 7000,
          isClosable: true,
        });
        setEmail("");
        setMessage("");
        setName("");
      } else {
        console.error("Server response:", res.status, resJson);
        toast({
          title: "Error!",
          description: "An error occurred while sending your message.",
          status: "error",
          duration: 7000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred while sending your message.");
    }
  };

  return (
    <Box>
      <AnimatedContactForm />

      <Box
        marginTop={{ base: 16, md: 24, lg: 32, xl: 60 }}
        _hover={{
          boxShadow: "2xl",
          transform: "scale(1.1)",
          transition: "all 0.5s ease",
          cursor: "pointer",
        }}
        borderRadius={{ base: "none", md: "xl" }}
        mb={{ base: 16, md: 24 }}
        mt={{ base: 16, md: 24 }}
        
        boxShadow={{ base: "none", md: "xl" }}
        mx="auto"
        w={{ base: "90%", md: "40%" }}
        p={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Box mb={4} mx="auto" textAlign="center">
          <Heading>Get in touch</Heading>
          <Box>
            <p>
              I'd love to hear from you. Please fill out the form below and I
              will get back to you as soon as possible.
            </p>
          </Box>
        </Box>
        <Stack as={"form"} spacing={4} onSubmit={handleSubmit}>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Input
              type="text"
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="blue" type="submit">
            Submit
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Contact;
