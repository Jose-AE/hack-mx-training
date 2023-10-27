import { Text, Button, Flex, Heading, Input, Textarea } from "@chakra-ui/react";

export default function CreatePost() {
  return (
    <>
      <Flex
        gap={2}
        borderRadius={"sm"}
        p={"10px"}
        my={"5px"}
        borderWidth={"1px"}
        bg={"#1A1A1B"}
        direction={"column"}
      >
        <Heading size={"md"}>Create Post</Heading>

        <Text fontSize={"xs"}>Title</Text>
        <Input fontSize={"10px"} pl={1} h={"20px"} />
        <Text fontSize={"xs"}>Body</Text>

        <Textarea h={"150px"} pt={1} pl={1} fontSize={"10px"} />
        <Button>Post</Button>
      </Flex>
    </>
  );
}
