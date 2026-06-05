import { Box, Flex, Heading, Text, Link, Icon, chakra } from "@chakra-ui/react";
import MotionBox from "components/motion/Box";
import { Tooltip } from "components/ui/tooltip";

interface EnhancedProjectProps {
  icons: { icon: any; url: string }[];
  title: string;
  description: string;
  tags: string[];
}

const EnhancedProject = ({
  icons,
  title,
  description,
  tags,
}: EnhancedProjectProps) => {
  return (
    <MotionBox
      whileHover={{ y: -5 }}
      p={6}
      bg="bg.surface"
      borderRadius="2xl"
      borderWidth="1px"
      borderColor="border.default"
      _hover={{ borderColor: "brand.500", boxShadow: "xl" }}
    >
      <Flex gap={3} mb={4}>
        {icons.map((item, index: number) => (
          <Tooltip key={index} content="Project Link">
            <chakra.a href={item.url} target="_blank" rel="noopener noreferrer" cursor="pointer">
               <Icon as={item.icon} w={6} h={6} color="brand.400" />
            </chakra.a>
          </Tooltip>
        ))}
      </Flex>
      <Heading size="md" mb={2}>{title}</Heading>
      <Text color="fg.muted" mb={4}>{description}</Text>
      <Flex gap={2} wrap="wrap">
        {tags.map((tag) => (
          <Text key={tag} fontSize="xs" color="brand.500" fontWeight="bold">#{tag}</Text>
        ))}
      </Flex>
    </MotionBox>
  );
};

export default EnhancedProject;
