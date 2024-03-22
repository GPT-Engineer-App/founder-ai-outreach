import React, { useState } from "react";
import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast, Image } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";

const Index = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with LinkedIn API to send message
    console.log(`Sending message to ${name} at ${company}...`);
    toast({
      title: "Message Sent",
      description: `Your message has been sent to ${name} at ${company}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setName("");
    setCompany("");
    setRole("");
    setMessage("");
  };

  return (
    <Box maxWidth="600px" margin="auto" padding={8}>
      <VStack spacing={8} alignItems="center">
        <Image src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaW5rZWRpbiUyMGxvZ298ZW58MHx8fHwxNzExMTIxMzI5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="LinkedIn" width="80px" />
        <Heading>AI-Powered LinkedIn Outreach</Heading>
        <Text>Automate your founder-led sales outreach on LinkedIn.</Text>

        <Box width="100%" as="form" onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter prospect name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Company</FormLabel>
              <Input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter company name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Role</FormLabel>
              <Input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Enter prospect's role" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message" size="sm" />
            </FormControl>
            <Button type="submit" colorScheme="blue" leftIcon={<FaLinkedin />}>
              Send LinkedIn Message
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
