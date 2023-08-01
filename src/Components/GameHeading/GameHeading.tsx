import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";

interface GameHeadingProp {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProp) => {
  const heading = `
  ${gameQuery.platform?.name || ""} 
  ${gameQuery.genre?.name || ""} 
  Games
  `;
  return (
    <>
      <Heading as={"h1"} marginBottom={3} fontSize={"5xl"}>
        {heading}
      </Heading>
    </>
  );
};

export default GameHeading;
