/* eslint-disable prettier/prettier */
import { Button, ButtonProps, useColorModeValue } from "@chakra-ui/react";

const ThemedButton = (props: ButtonProps) => {
  const { children } = props;
  return (
    <Button
      borderRadius="0.25em"
      _hover={{}}
      display="inline-flex"
      variant="unstyled"
      bg={useColorModeValue("#111111", "#ffffff")}
      padding={5}
      paddingY={3}
      size="lg"
      fontWeight="800"
      height="auto"
      color={useColorModeValue("#ffffff", "rgb(17, 17, 17)")}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ThemedButton;
