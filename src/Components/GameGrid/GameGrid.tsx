import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import GameCardContainer from "../GameCardContainer/GameCardContainer";
import { GenreProp } from "../../hooks/useGenre";

interface GameGridProp {
  selectedGenre: GenreProp | null;
}

const GameGrid = ({ selectedGenre }: GameGridProp) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
