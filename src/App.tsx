import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar/Navbar";
import GameGrid from "./Components/GameGrid/GameGrid";
import GenreList from "./Components/GenreList/GenreList";
import { useState } from "react";
import { GenreProp } from "./hooks/useGenre";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreProp | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: '"nav" "main"', //Mobile
          lg: '"nav nav" "aside main"', //1024px
        }}
        templateColumns={{
          base: "1fr", // 1 coulmun takes every space
          lg: "200px 1fr", // side panel takes 200px, everything else takes every available space
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
