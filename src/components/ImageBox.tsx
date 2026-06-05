import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ImageBoxProps {
  image: string;
  width: number;
  height: number;
  alt: string;
}

const MotionBox = motion(Box);

const ImageBox = ({ image, height, width, alt }: ImageBoxProps) => {
  return (
    <MotionBox
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      overflow="hidden"
      borderRadius="2xl"
      bg="bg.subtle"
      boxShadow="lg"
    >
      <Image
        src={image}
        height={height}
        width={width}
        alt={alt}
        style={{ objectFit: "cover" }}
      />
    </MotionBox>
  );
};

export default ImageBox;
