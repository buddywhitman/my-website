import { motion, useScroll, useSpring } from "framer-motion";
import { Box } from "@chakra-ui/react";

const MotionBox = motion(Box) as any;

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <MotionBox
      style={{ scaleX }}
      position="fixed"
      top={0}
      left={0}
      right={0}
      height="4px"
      bg="brand.500"
      transformOrigin="0%"
      zIndex={2000}
    />
  );
};
