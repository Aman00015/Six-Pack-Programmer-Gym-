import React from "react";
import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CgGym } from "react-icons/cg";
import { MdSportsGymnastics } from "react-icons/md";
const SignUp = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <form>
        <VStack
          alignItems={"stretch"}
          spacing={"8"}
          w={["full", "96"]}
          m={"auto"}
          my={"16"}
        >
          <Heading>
            <span style={{ color: "lightblue", display: "flex" }}>
              Six Pack Programmer{" "}
            </span>
            <span style={{ color: "white", display: "flex" }}>
              Gym <CgGym color="gray" />
              <MdSportsGymnastics color="BurlyWood" />
            </span>{" "}
          </Heading>
          <Input
            placeholder="Name"
            type="text"
            required
            focusBorderColor={"darkblue"}
          />
          <Input
            placeholder="Email"
            type="email"
            required
            focusBorderColor={"darkblue"}
          />
          <Input
            placeholder="Password"
            type="password"
            required
            focusBorderColor={"darkblue"}
          />

          <Button colorScheme="blue" type="submit">
          <a href={'/login'}>
          SignUp
            </a>
           
          </Button>
          <Text textAlign={"right"}> Already A User ?</Text>
          <Button variant={"link"} alignSelf={"flex-end"} colorScheme={"blue"}>
            <Link to={"/login"}>Login</Link>
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default SignUp;
