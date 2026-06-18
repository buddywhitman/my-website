import { createSystem, defaultConfig, defineConfig, defineRecipe } from "@chakra-ui/react";
import colors from "./colors";
import fonts from "./fonts";

const buttonRecipe = defineRecipe({
  base: {
    borderRadius: "full",
    fontWeight: "semibold",
    transition: "all 0.2s ease-in-out",
  },
  variants: {
    variant: {
      solid: {
        bg: "brand.500",
        color: "white",
        _hover: {
          bg: "brand.600",
          transform: "translateY(-1px)",
          boxShadow: "0 4px 12px rgba(214, 36, 140, 0.3)",
        },
      },
      outline: {
        border: "1px solid",
        borderColor: "border.default",
        _hover: {
          bg: "bg.subtle",
        },
      },
      ghost: {
        _hover: {
          bg: "bg.subtle",
        },
      },
    },
  },
});

const config = defineConfig({
  theme: {
    tokens: {
      colors,
      fonts,
      spacing: {
        "0": { value: "0rem" },
        "1": { value: "0.25rem" },
        "2": { value: "0.5rem" },
        "3": { value: "0.75rem" },
        "4": { value: "1rem" },
        "5": { value: "1.25rem" },
        "6": { value: "1.5rem" },
        "8": { value: "2rem" },
        "10": { value: "2.5rem" },
        "12": { value: "3rem" },
        "16": { value: "4rem" },
        "20": { value: "5rem" },
        "24": { value: "6rem" },
        "32": { value: "8rem" },
        "40": { value: "10rem" },
        "48": { value: "12rem" },
        "56": { value: "14rem" },
        "64": { value: "16rem" },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          default: { value: { base: "#f4efe6", _dark: "#0e0b13" } },
          surface: { value: { base: "#ece5d8", _dark: "#15111d" } },
          subtle: { value: { base: "#e3dacb", _dark: "#1b1626" } },
        },
        fg: {
          default: { value: { base: "#1a1320", _dark: "#f2ece3" } },
          muted: { value: { base: "#5b5260", _dark: "#a59ba8" } },
          subtle: { value: { base: "#7a7280", _dark: "#7c7488" } },
        },
        border: {
          default: { value: { base: "#d8cdbb", _dark: "#2a2438" } },
          subtle: { value: { base: "#e3dacb", _dark: "#1b1626" } },
        }
      },
    },
    recipes: {
      button: buttonRecipe,
    },
  },
  globalCss: {
    "html, body": {
      bg: "bg.default",
      color: "fg.default",
      fontFamily: "body",
      lineHeight: "relaxed",
      margin: 0,
      padding: 0,
      fontSmooth: "antialiased",
    },
    "*::selection": {
      bg: "brand.400",
      color: "white",
    },
  },
});

export const system = createSystem(defaultConfig, config);

export default system;
