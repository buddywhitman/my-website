/* eslint-disable prettier/prettier */
import { Box, Button, Image } from "@chakra-ui/react";
import Link from "next/link";

import MotionBox from "components/motion/Box";

const Page404 = () => {
  return (
    <>
      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        width={["100%", "70%", "60%", "60%"]}
        margin="0 auto"
      >
        <Image
          src="/404 Error-pana.svg"
          alt="Error 404 not found Illustration"
        />
      </MotionBox>

      <Box marginY={4}>
        <Box textAlign="center" marginTop={4}>
          <Link href="/" passHref>
            <Button size="lg">Home</Button>
          </Link>
        </Box>
        <a href="https://www.freepik.com/vectors/computer">
          Computer vector created by jcomp - www.freepik.com
        </a>
      </Box>
    </>
  );
};

export default Page404;
