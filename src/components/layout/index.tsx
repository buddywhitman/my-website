import { Box, Container } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

import Drawer from "./Drawer";
import Footer from "./Footer";
import Header from "./Header";
import { ScrollProgress } from "./ScrollProgress";
import { CustomCursor } from "./CustomCursor";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <CustomCursor />
      <ScrollProgress />
      <Container maxW="container.xl" flex="1">
        <Header onOpen={onOpen} />
        <Drawer isOpen={isOpen} onClose={onClose} />
        <Box as="main" py="12">
          {children}
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
