import { Box, Icon, Link, VisuallyHidden } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BiLinkExternal } from "react-icons/bi";

interface IconLinkProps {
  icon: IconType;
  url: string;
}

const IconLink = ({ icon, url }: IconLinkProps) => {
  const label = url.includes("github.com") ? "View Source on GitHub" : "View Live Project";
  
  return (
    <Box>
      <Link 
        href={url} 
        target="_blank" 
        display="flex" 
        alignItems="center" 
        _hover={{ color: "brand.400" }}
        aria-label={label}
      >
        <Icon boxSize={6} as={icon} />
        <Icon boxSize={3} as={BiLinkExternal} ml={1} />
      </Link>
    </Box>
  );
};

export default IconLink;
