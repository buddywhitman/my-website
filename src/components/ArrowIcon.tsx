import { Icon, IconProps } from "@chakra-ui/react";

export default function ArrowIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path d="M16 9v-4l8 8-8 8v-4s-13.277-2.144-16-14c5.796 6.206 16 6 16 6z" />
    </Icon>
  );
}
