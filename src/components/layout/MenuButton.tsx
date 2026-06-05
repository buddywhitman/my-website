import { IconButton } from "@chakra-ui/react";
import { Menu } from "lucide-react";

interface MenuButtonProps {
  onClick: () => void;
}

const MenuButton = ({ onClick }: MenuButtonProps) => {
  return (
    <IconButton
      variant="ghost"
      size="lg"
      onClick={onClick}
      aria-label="toggle menu"
    >
      <Menu size={24} />
    </IconButton>
  );
};

export default MenuButton;
