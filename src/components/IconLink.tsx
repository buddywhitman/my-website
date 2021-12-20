import { Box, Icon, Link, VisuallyHidden } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BiLinkExternal } from "react-icons/bi";

interface IconLinkProps {
  icon: IconType;
  url: string;
}

const IconLink = ({ icon, url }: IconLinkProps) => {
  return (
    <Box mr={3}>
      <Link href={url} isExternal>
        <VisuallyHidden>{url}</VisuallyHidden>
        <Icon boxSize={8} as={icon} />
        <Icon boxSize={8} as={BiLinkExternal} />
      </Link>
    </Box>
  );
};

export default IconLink;
