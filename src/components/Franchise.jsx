import {
  Box,
  VStack,
  Input,
  Heading,
  Button,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const Franchise = () => {
    const toast = useToast();

    const showToast = () => {
      toast({
        title: "Request Sent",
        description: "We've raised a franchise request for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    };
  
  return (
    <VStack h={"100vh"} w={"full"}>
      <Box w={"50%"} h={"100vh"}>
        <form>
          <VStack
            alignItems={"stretch"}
            spacing={"8"}
            w={["full", "96"]}
            m={"auto"}
            my={"16"}
          >
            <Heading>Get Our Franchise To Your City</Heading>
            <Select placeholder="Select State">
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Maharastra">Maharastra</option>
              <option value="Arunachal Pradesh ">Arunachal Pradesh </option>
              <option value="Assam">Assam</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
            </Select>

            <Select placeholder="Select City">
              <option value="Amaravati">Amaravati</option>
              <option value="Panaji">Panaji</option>
              <option value="Gandhinagar">Gandhinagar</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Itanagar">Itanagar</option>
              <option value="Dispur">Dispur</option>
              <option value="Patna">Patna</option>
              <option value="Raipur">Raipur</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Thiruvananthapuram">Thiruvananthapuram</option>
              <option value="Bhopal">Bhopal</option>
            </Select>
            <Input type="text" placeholder="Enter Full Address" />
            <Text alignSelf={"flex-end"}>
              *More States Will Be Added Sooner
            </Text>
            <Button
              onClick={showToast}
            >
              Make A Request
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
};


export default Franchise;
