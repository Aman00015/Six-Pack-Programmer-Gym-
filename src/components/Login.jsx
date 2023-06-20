import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const Login = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <form>
        <VStack
          alignItems={"stretch"}
          spacing={"8"}
          w={['full','96']}
          m={"auto"}
          my={"16"}
        >
          <Heading>Welcome Back</Heading>
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
          <Button variant={"link"} alignSelf={"end"}>
            <Link to={"/forgetpassword"}>Forget Password?</Link>
          </Button>

          <Button colorScheme="blue" type="submit">
            <a href={'/about'}>
            Login
            </a>
          </Button>
          <Text textAlign={"right"}> New User ?</Text>
          <Button variant={"link"} alignSelf={"flex-end"}  colorScheme={'blue'}>
            <Link to={'/signup'}>SignUp</Link>
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
