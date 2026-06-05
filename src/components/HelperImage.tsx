import { Box, Image } from "@chakra-ui/react";
import { Tooltip } from "components/ui/tooltip";

interface HelperImageProps {
  label: string;
  src: string;
}

const HelperImage = ({ label, src }: HelperImageProps) => {
  return (
    <Tooltip content={label} showArrow>
      <Box borderRadius="xl" overflow="hidden">
        <Image src={src} alt={label} />
      </Box>
    </Tooltip>
  );
};

export default HelperImage;
