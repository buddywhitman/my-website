/* eslint-disable prettier/prettier */
import { Button, ButtonProps, useColorModeValue } from "@chakra-ui/react";

const ThemedMainButton = (props: ButtonProps) => {
  const { children } = props;
  return (
    <Button
      borderRadius="0.25em"
      _hover={{}}
      display="inline-flex"
      variant="outline"
      border="2px"
      borderColor={useColorModeValue("#111111","#ffffff")}
      bg={useColorModeValue("#ffffff", "#111111")}
      padding={5}
      paddingY={3}
      size="lg"
      fontWeight="800"
      height="auto"
      color={useColorModeValue( "rgb(17, 17, 17)", "#ffffff")}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ThemedMainButton;
