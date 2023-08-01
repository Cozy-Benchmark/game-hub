import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import SearchInput from "../SearchInput/SearchInput";

interface SearchInputProp {
  onSearch: (searchString: string) => void;
}

const Navbar = ({onSearch}: SearchInputProp) => {
  return (
    <>
      <HStack padding={"10px"}>
        <Image src={logo} boxSize="60px"></Image>
        <SearchInput onSearch={onSearch}></SearchInput>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
