import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProp {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProp) => {
  return (
    <>
      <Box borderRadius={10} overflow="hidden">
        {children}
      </Box>
    </>
  );
};

export default GameCardContainer;
