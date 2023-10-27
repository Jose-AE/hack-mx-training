import { Flex, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

export default function Home() {
  return (
    <>
      <Navbar />
      <Flex mt={"50px"} bg={"black"} h="100vh">
        <LeftPanel />
        <RightPanel />
      </Flex>
    </>
  );
}
