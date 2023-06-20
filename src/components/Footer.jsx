import React from "react";
import {
  Box,
  Stack,
  VStack,
  Heading,
  HStack,
  Button,
  Input,
  Text,
} from "@chakra-ui/react";
import { AiOutlineSend,AiFillFacebook,AiFillYoutube,AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.500"} minW={"40"} p={"16"} color={"white"}>
      <Stack direction={["column", "row"]}>
        <VStack alignItems={"stretch"} w={"full"}>
          <Heading size={"md"} textAlign={'center'}>Subscribe For More Updates</Heading>
          <HStack borderBottom={"2px solid white"}>
            <Input
              placeholder="Enter Email..."
              border={"none"}
              borderRadius={"none"}
              outline={"none"}
              focusBorderColor="none"
            ></Input>
            <Button
              p={"0"}
              colorScheme="blue"
              variant={"ghost"}
              borderRadius={"0 20px 20px 0"}
            >
              <AiOutlineSend size={"20"} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={"full"}
          borderLeft={["none", "1px solid white"]}
          borderRight={["none", "1px solid white"]}
        >
          <Heading size={"md"} textAlign={"center"}>Six Pack Programmer Gym</Heading>
          <Text>All Rights Reserved</Text>
        </VStack>
        <VStack w={"full"}>
            <Heading>Social Media</Heading>
            <Button variant={'link'} colorScheme="white">
                <a href="https://youtube.com">Youtube</a>
            </Button>
            <Button variant={'link'} colorScheme="white">
                <a href="https://facebook.com">Facebook</a>
            </Button>
            <Button variant={'link'} colorScheme="white">
                <a href="https://github.com">Github</a>
            </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
