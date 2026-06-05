import {
  Drawer,
  Heading,
  Flex,
  Link as ChakraLink,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import MotionBox from "components/motion/Box";

interface DrawerWidgetProps {
  onClose: () => void;
  isOpen: boolean;
}

const DrawerLink = ({ text, url, onClick }: { text: string; url: string; onClick: () => void }) => (
  <ChakraLink
    asChild
    fontSize="3xl"
    fontWeight="bold"
    letterSpacing="tight"
    _hover={{ color: "brand.500", textDecoration: "none" }}
    onClick={onClick}
  >
    <Link href={url}>{text}</Link>
  </ChakraLink>
);

const DrawerWidget = ({ onClose, isOpen }: DrawerWidgetProps) => {
  return (
    <Drawer.Root open={isOpen} onOpenChange={onClose} placement="right">
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content
          bg="bg.default"
          p="8"
          pt="20"
        >
          <Drawer.CloseTrigger 
            position="absolute" 
            top="4" 
            right="4" 
            size="lg"
          />
          <Drawer.Body>
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <VStack align="flex-start" gap="6">
                <DrawerLink text="about" url="/about" onClick={onClose} />
                <DrawerLink text="tech" url="/tech" onClick={onClose} />
                <DrawerLink text="contact" url="/contact" onClick={onClose} />
                <DrawerLink 
                  text="resume" 
                  url="https://github.com/buddywhitman/my-website/blob/main/Pulkit_Kumar_Resume.pdf" 
                  onClick={onClose} 
                />
              </VStack>
            </MotionBox>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
};

export default DrawerWidget;
