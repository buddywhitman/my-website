import {
  Drawer,
  VStack,
  Box,
  Text,
  Separator,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import MotionBox from "components/motion/Box";

interface DrawerWidgetProps {
  onClose: () => void;
  isOpen: boolean;
}

const drawerLinkBase: React.CSSProperties = {
  fontFamily: "'EB Garamond', Georgia, serif",
  fontStyle: "italic",
  fontSize: "2.4rem",
  fontWeight: 500,
  letterSpacing: "-0.02em",
  lineHeight: 1.1,
  textDecoration: "none",
  display: "block",
  transition: "color 200ms ease",
};

const DrawerLink = ({
  text,
  url,
  onClick,
  external = false,
  accent = false,
}: {
  text: string;
  url: string;
  onClick: () => void;
  external?: boolean;
  accent?: boolean;
}) => {
  const style: React.CSSProperties = {
    ...drawerLinkBase,
    color: accent ? "var(--accent)" : "var(--synced-text)",
  };

  const hoverOn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "var(--accent)";
  };
  const hoverOff = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = accent ? "var(--accent)" : "var(--synced-text)";
  };

  if (external) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={style}
        onClick={onClick}
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}
      >
        {text}
      </a>
    );
  }

  return (
    <Link
      href={url}
      style={style}
      onClick={onClick}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
    >
      {text}
    </Link>
  );
};

const DrawerWidget = ({ onClose, isOpen }: DrawerWidgetProps) => {
  return (
    <Drawer.Root open={isOpen} onOpenChange={onClose} placement="end">
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content
          bg="var(--chakra-colors-bg-default)"
          p="8"
          pt="20"
          maxW="320px"
          borderLeft="1px solid"
          borderColor="var(--synced-border)"
        >
          <Drawer.CloseTrigger position="absolute" top="4" right="4" />
          <Drawer.Body>
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            >
              <VStack align="flex-start" gap="4">
                <DrawerLink text="about" url="/about" onClick={onClose} />
                <DrawerLink text="software" url="/software" onClick={onClose} />
                <DrawerLink text="hardware" url="/hardware" onClick={onClose} />
                <DrawerLink text="research" url="/research" onClick={onClose} />
                <DrawerLink text="open-source" url="/open-source" onClick={onClose} />
                <DrawerLink text="blog" url="/blog" onClick={onClose} />
                <DrawerLink text="talks" url="/talks" onClick={onClose} />
                
                <Box w="full" py="2">
                  <Separator borderColor="var(--synced-border)" />
                </Box>

                <DrawerLink
                  text="resume"
                  url="/resume"
                  onClick={onClose}
                  accent
                />
                
                <DrawerLink text="contact" url="/contact" onClick={onClose} />

                <Box w="full" py="2">
                  <Separator borderColor="var(--synced-border)" />
                </Box>
                
                <Text className="mono-label" color="var(--synced-muted)" fontSize="9px">
                  beyond the terminal
                </Text>

                <DrawerLink text="2wenzy" url="2wenzy.vercel.app" onClick={onClose} />
                <DrawerLink text="desihippe" url="desihippe.vercel.app" onClick={onClose} />
                
              </VStack>
            </MotionBox>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
};

export default DrawerWidget;
