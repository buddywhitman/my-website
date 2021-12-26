import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

import MotionBox from "components/motion/Box";

interface DrawerWidgetProps {
  onClose: () => void;
  isOpen: boolean;
}

const DrawerWidget = ({ onClose, isOpen }: DrawerWidgetProps) => {
  return (
    <Drawer
      autoFocus={false}
      returnFocusOnClose={false}
      onClose={onClose}
      isOpen={isOpen}
    >
      <DrawerOverlay />
      <DrawerContent
        backgroundColor={useColorModeValue("bgblack.100", "bgwhite.100")}
        textColor={useColorModeValue("textwhite.100", "textblack.100")}
      >
        <DrawerHeader>
          <DrawerCloseButton size="lg" />
        </DrawerHeader>
        <DrawerBody>
          <MotionBox>
            <Flex marginY={4} direction="column" textAlign="left" spacing={3}>
              <Link passHref href="/about">
                <Heading>About</Heading>
              </Link>
              <Link passHref href="/tech">
                <Heading>Tech</Heading>
              </Link>
              <Link passHref href="/design">
                <Heading>Design</Heading>
              </Link>
              <Link passHref href="/contact">
                <Heading>Contact</Heading>
              </Link>
              <Link passHref href="https://dagpi.xyz/donate">
                <Heading>Donate</Heading>
              </Link>
            </Flex>
          </MotionBox>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerWidget;
