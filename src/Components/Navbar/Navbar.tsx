import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import SearchInput from "../SearchInput/SearchInput";

const Navbar = () => {
  return (
    <>
      <HStack padding={"10px"}>
        <Image src={logo} boxSize="60px"></Image>
        <SearchInput></SearchInput>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
