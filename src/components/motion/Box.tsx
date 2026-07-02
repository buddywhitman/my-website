 
import { chakra, HTMLChakraProps } from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

type MotionBoxProps = HTMLChakraProps<"div"> & HTMLMotionProps<"div">;

const MotionBox = motion(chakra.div) as any;

export default MotionBox as React.FC<MotionBoxProps>;
