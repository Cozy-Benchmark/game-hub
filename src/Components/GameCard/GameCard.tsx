import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { GameProp } from "../../hooks/useGames";
import PlatformIconList from "../PlatformIconList/PlatformIconList";

interface GameCardProp {
  game: GameProp;
}
const GameCard = ({ game }: GameCardProp) => {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image}></Image>
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
