import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { Box } from "@chakra-ui/react";

const MotionBox = motion(Box) as any;

export const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <MotionBox
      position="fixed"
      top={0}
      left={0}
      width="32px"
      height="32px"
      borderRadius="full"
      border="2px solid"
      borderColor="brand.500"
      pointerEvents="none"
      zIndex={9999}
      display={{ base: "none", lg: "block" }}
      style={{
        x: cursorX,
        y: cursorY,
      }}
      animate={{
        scale: isHovered ? 1.5 : 1,
        backgroundColor: isHovered ? "rgba(2, 132, 199, 0.1)" : "rgba(0,0,0,0)",
      }}
    />
  );
};
