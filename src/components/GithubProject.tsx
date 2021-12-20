import { Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { FiBook, FiStar, FiLock } from "react-icons/fi";
import { HiOutlineScale } from "react-icons/hi";

import { RespositoryData } from "types/typed_data";

interface GithubProjectProps {
  data: RespositoryData;
}

const GithubProject = (val: GithubProjectProps) => {
  const { data } = val;
  return (
    <Flex
      height={48}
      mx={3}
      maxW="md"
      my={3}
      borderWidth="1px"
      borderRadius="lg"
      direction="column"
      p={{ base: 2, md: 5 }}
    >
      <Flex direction="row">
        <Icon as={data.isPrivate ? FiLock : FiBook} mt={1} />
        <a href={data.url} style={{ color: "#0363cf", marginLeft: "0.5em" }}>
          <Heading
            fontWeight="bold"
            fontSize={{ base: "sm", md: "md" }}
            justifyContent="center"
          >
            {data.nameWithOwner}
          </Heading>
        </a>
      </Flex>
      <Text fontSize={{ base: "sm", md: "md" }} marginY={3}>
        {data.description}
      </Text>
      <Flex>
        {data.primaryLanguage && (
          <Flex direction="row">
            <div
              style={{
                height: "12px",
                width: "12px",
                borderRadius: "50%",
                marginTop: "0.30em",
                marginRight: "0.5em",
                backgroundColor: data.primaryLanguage.color,
              }}
            />
            <Text fontSize={{ base: "sm", md: "md" }}>
              {data.primaryLanguage.name}
            </Text>
          </Flex>
        )}
        <Flex ml={8}>
          <Icon as={FiStar} mt={1} mr={1} />
          <Text fontSize={{ base: "sm", md: "md" }}>{data.stargazerCount}</Text>
        </Flex>
        {data.licenseInfo && (
          <Flex ml={8}>
            <Icon as={HiOutlineScale} mt={1} mr={1} />
            <Text fontSize={{ base: "sm", md: "md" }}>
              {data.licenseInfo.nickname || data.licenseInfo.name}
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default GithubProject;
