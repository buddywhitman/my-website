import { Box } from "@chakra-ui/react";
import Image from "next/image";

interface ImageBoxProps {
  image: string;
  width: number;
  height: number;
  alt: string;
}

const ImageBox = ({ image, height, width, alt }: ImageBoxProps) => {
  return (
    <Box marginY={8} marginX="auto">
      <Image src={image} height={height} width={width} alt={alt} />
    </Box>
  );
};

export default ImageBox;
