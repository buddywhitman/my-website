import { Button, ButtonProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const ThemedMainButton = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <MotionButton
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      borderRadius="full"
      display="inline-flex"
      variant="outline"
      borderWidth="2px"
      borderColor="fg.default"
      bg="transparent"
      color="fg.default"
      px={8}
      py={6}
      fontSize="md"
      fontWeight="bold"
      _hover={{
        bg: "fg.default",
        color: "bg.default",
      }}
      {...rest}
    >
      {children}
    </MotionButton>
  );
};

export default ThemedMainButton;
