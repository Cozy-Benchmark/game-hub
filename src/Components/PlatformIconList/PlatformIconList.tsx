import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface PlatformIconListProp {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProp) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    nintendo: SiNintendo,
    playstation: FaPlaystation,
    mac: FaApple,
    linux: FaLinux,
    web: BsGlobe,
    ios: MdPhoneIphone,
    android: FaAndroid,
  };
  return (
    <>
      <HStack marginY={"10px"}>
        {platforms.map((platform) => (
          <Icon
            key={platform.slug}
            as={iconMap[platform.slug]}
            color="gray.500"
          ></Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
