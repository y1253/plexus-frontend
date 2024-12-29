import { useEffect, useState } from "react";

import axios from "axios";
import { CardGrid } from "./components/CardGrid";
import { HouseCard } from "./components/HouseCard";
import { Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"main"}></GridItem>
    </Grid>
  );
}

export default App;
