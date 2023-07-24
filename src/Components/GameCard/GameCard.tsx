import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { GameProp } from "../../hooks/useGames";

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
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
