import { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  brand: {
    50: "#04d9ff",
    100: "#caf0f8",
    200: "#90e0ef",
    300: "#00b4d8",
    400: "#00a8e8",
    500: "#007ea7",
    600: "#00509d",
    700: "#003f88",
    800: "#00296b",
    900: "#003459",
  },

  bgblack: {
    100: "#111111",
  },

  bgwhite: {
    100: "#f8f9fa",
  },

  textblack: {
    100: "#212529",
  },

  textwhite: {
    100: "#f8f9fa",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
