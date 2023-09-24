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
                <Heading>about</Heading>
              </Link>
              <Link passHref href="/tech">
                <Heading>tech</Heading>
              </Link>
              {/*
              <Link passHref href="/design">
                <Heading>design</Heading>
              </Link>
              <Link passHref href="/blog">
                <Heading>blog</Heading>
              </Link>
              */}
              <Link passHref href="/contact">
                <Heading>contact</Heading>
              </Link>
              <Link
                passHref
                href="https://www.patreon.com/checkout/10499173/9791345"
              >
                <Heading>donate</Heading>
              </Link>
            </Flex>
          </MotionBox>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerWidget;
