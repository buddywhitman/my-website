/* eslint-disable prettier/prettier */
import { IconButton } from "@chakra-ui/react";
import { CgMenuOreos } from "react-icons/cg";

interface MenuButtonProps {
  onClick: () => void;
}

const MenuButton = ({ onClick }: MenuButtonProps) => {
  return (
    <IconButton
      fontWeight="extrabold"
      size="lg"
      onClick={onClick}
      aria-label="toggle menu"
      icon={<CgMenuOreos />}
    />
  );
};

export default MenuButton;
