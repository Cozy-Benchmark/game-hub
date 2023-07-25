import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar/Navbar";
import GameGrid from "./Components/GameGrid/GameGrid";
import GenreList from "./Components/GenreList/GenreList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: '"nav" "main"', //Mobile
          lg: '"nav nav" "aside main"', //1024px
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
