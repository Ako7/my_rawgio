import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/rawg-logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" paddingX="10px">
      <Image src={logo} boxSize="60px"></Image>
      <Text>RAWG</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
