import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Post from "./Post";

export default function LeftPanel() {
  return (
    <Flex m={"10px"} direction="column" w="65%">
      <Post
        age={10}
        author="Gatuno7000"
        body={`I get Seele isn't top meta anymore but it seems every time someone
        asks if they should pull Seele you'll see a "qq e4 better". Here's
        why I don't like that phrase. Playstyle. QQ and Seele offer vastly
        different playstyles. QQ is a SP black hole (more so than Seele's
        potential sp problems) with a gambling mecha`}
        comments={5}
        title="Why all the Seele slander? (Seele vs QQ)"
        key={1}
      />
    </Flex>
  );
}
