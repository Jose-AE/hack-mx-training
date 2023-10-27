import { Flex } from "@chakra-ui/react";
import React from "react";
import CreatePost from "./CreatePost";

export default function RightPanel() {
  return (
    <Flex m={"10px"} direction="column" w="35%">
      <CreatePost />
    </Flex>
  );
}
