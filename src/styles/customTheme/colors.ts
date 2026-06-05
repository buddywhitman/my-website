const colors = {
  black: { value: "#000000" },
  white: { value: "#FFFFFF" },
  brand: {
    50: { value: "#e6f6ff" },
    100: { value: "#baedff" },
    200: { value: "#7dd3fc" },
    300: { value: "#38bdf8" },
    400: { value: "#0ea5e9" },
    500: { value: "#0284c7" },
    600: { value: "#0369a1" },
    700: { value: "#075985" },
    800: { value: "#0c4a6e" },
    900: { value: "#082f49" },
    950: { value: "#020617" },
  },
  bg: {
    canvas: { value: "{colors.black}" },
    surface: { value: "#0A0A0A" },
    subtle: { value: "#171717" },
  },
  fg: {
    default: { value: "{colors.white}" },
    muted: { value: "#A3A3A3" },
    subtle: { value: "#737373" },
  },
  border: {
    default: { value: "#262626" },
    subtle: { value: "#171717" },
  },
};

export default colors;
