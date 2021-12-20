import { Box, useDisclosure } from "@chakra-ui/react";
import { ReactNode } from "react";

import Drawer from "./Drawer";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      margin="0 auto"
      marginX={{ base: 0, md: 8 }}
      transition="0.5s ease-out"
    >
      <Box margin="8">
        <Header onOpen={onOpen} />
        <Drawer isOpen={isOpen} onClose={onClose} />
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
