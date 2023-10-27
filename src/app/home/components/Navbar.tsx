"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { BiCubeAlt, BiSearch } from "react-icons/bi";

import { signIn } from "next-auth/react";

function Searchbar() {
  return (
    <>
      <Flex>
        <InputGroup>
          <InputLeftElement>
            <Flex mb={"2"}>
              <BiSearch />
            </Flex>
          </InputLeftElement>
          <Input borderRadius={"3xl"} h="30px" placeholder="Search" />
        </InputGroup>
      </Flex>
    </>
  );
}

export default function Navbar() {
  return (
    <>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        h={"50px"}
        borderWidth={"0 0 1px 0"}
        bg={useColorModeValue("gray.100", "#1A1A1B")}
        px={4}
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
      >
        <HStack spacing={8} alignItems={"center"}>
          <BiCubeAlt size={"30px"} />

          <Searchbar />
        </HStack>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar size={"sm"} src={""} />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => signIn("google")}>Login</MenuItem>
              <MenuDivider />
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </>
  );
}
