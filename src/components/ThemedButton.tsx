import { Button, ButtonProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionButton = motion(Button) as any;

const ThemedButton = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <MotionButton
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 } as any}
      borderRadius="full"
      display="inline-flex"
      bg="fg.default"
      color="bg.default"
      px={8}
      py={6}
      fontSize="md"
      fontWeight="bold"
      _hover={{
        bg: "brand.500",
        color: "white",
      }}
      {...rest}
    >
      {children}
    </MotionButton>
  );
};

export default ThemedButton;
