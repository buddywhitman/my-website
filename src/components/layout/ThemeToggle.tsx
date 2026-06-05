import { IconButton } from "@chakra-ui/react";
import { Moon, Sun } from "lucide-react";
import { useColorMode } from "components/ui/color-mode";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      variant="ghost"
      size="lg"
      aria-label="theme toggle"
      onClick={toggleColorMode}
    >
      {colorMode === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </IconButton>
  );
};

export default ThemeToggle;
