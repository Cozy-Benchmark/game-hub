import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar/Navbar";
import GameGrid from "./Components/GameGrid/GameGrid";
import GenreList from "./Components/GenreList/GenreList";
import { useState } from "react";
import { GenreProp } from "./hooks/useGenre";
import PlatformSelector from "./Components/PlatformSelector/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreProp | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  return (
    <>
      <Grid
        templateAreas={{
          base: '"nav" "main"', //Mobile
          lg: '"nav nav" "aside main"', //1024px
        }}
        templateColumns={{
          base: "1fr", // 1 coulmun takes every space
          lg: "240px 1fr", // side panel takes 200px, everything else takes every available space
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={3}>
            {/* gets notified and rerenders and passes to gamegrid*/}
            <GenreList
              selectedGenre={selectedGenre}
              onSelectedGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
