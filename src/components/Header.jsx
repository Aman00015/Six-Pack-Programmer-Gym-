import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
const Header = () => {
    const {isOpen,onOpen,onClose} =useDisclosure()
  return (
    <>
      <Button onClick={onOpen}
        pos={"fixed"}
        top={"4"}
        left={"4"}
        colorScheme="blue"
        p={"0"}
        w={"10"}
        h={"10"}
        zIndex={'overlay'}
        borderRadius={"full"}
      >
        <BiMenuAltLeft size={"20"} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton/>  
              <DrawerHeader>Six Packs Programmer Gym</DrawerHeader>
              <DrawerBody>
                <VStack>
                    <Button onClick={onClose} colorScheme="blue" variant={'ghost'}>
                        <Link to='/'>Home</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme="blue" variant={'ghost'}>
                        <Link to='/about'>About</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme="blue" variant={'ghost'}>
                        <Link to='/membership'>MemberShip Renewal</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme="blue" variant={'ghost'}>
                        <Link to='/franchise'>Franchise</Link>
                    </Button>
                </VStack>
                <HStack pos={'absolute'} bottom={'10 '} left={'0'} w={'full'} justifyContent={'space-evenly'}>
               <Button onClick={onClose} colorScheme="blue">
                <Link to={'/login'}>Login</Link>
               </Button>
               <Button onClick={onClose} colorScheme="blue" variant={'outline'}>
                <Link to={'/signup'}>signup</Link>
               </Button>
                </HStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Header;
