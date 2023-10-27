import {
  Avatar,
  Badge,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { BiComment, BiDownvote, BiUpvote } from "react-icons/bi";

interface PostProps {
  author: string;
  age: number;
  title: string;
  body: string;
  comments: number;
}

export default function Post({
  author,
  age,
  title,
  body,
  comments,
}: PostProps) {
  return (
    <>
      <Flex
        direction={"row"}
        borderRadius={"sm"}
        my={"5px"}
        borderWidth={"1px"}
        bg={"#1A1A1B"}
      >
        <Flex
          alignContent={"center"}
          p={"5px"}
          direction={"column"}
          w="22px"
          bg={"blackAlpha.300"}
          mr={"10px"}
        >
          <IconButton
            size={"15px"}
            aria-label="Search database"
            icon={<BiUpvote />}
          />
          <Text fontSize={"6px"}>1.2k</Text>

          <IconButton
            size={"15px"}
            aria-label="Search database"
            icon={<BiDownvote />}
          />
        </Flex>

        <Flex my={"10px"} direction={"column"} pr={"10px"}>
          <HStack mb={"10px"}>
            <Avatar size={"xs"} name={author} />
            <Badge size={"xs"}>{author}</Badge>
            <Text fontSize={"10px"} as={"i"}>
              {age} days ago
            </Text>
          </HStack>
          <Heading mb={"10px"} size={"sm"}>
            {title}
          </Heading>
          <Text
            mb={"10px"}
            textOverflow={"ellipsis"}
            fontSize={"xs"}
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 6,
              WebkitBoxOrient: "vertical",
            }}
          >
            {body}
          </Text>

          <Flex>
            <Button size={"xs"} leftIcon={<BiComment />} variant="solid">
              {comments} Comments
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
