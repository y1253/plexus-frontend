import { useEffect, useState } from "react";

import axios from "axios";
import { CardGrid } from "./components/CardGrid";
import { HouseCard } from "./components/HouseCard";
import { Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { HouseObject } from "./hooks/useHouse";

function App() {
  const [selectedHouse, setSelectedHose] = useState<number | null>(null);
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area={"nav"}>
        <NavBar
          id={(id) => {
            setSelectedHose(id);
            console.log(selectedHouse);
          }}
        />
      </GridItem>
      <GridItem area={"main"}>
        <CardGrid selectedHouse={selectedHouse} />
      </GridItem>
    </Grid>
  );
}

export default App;
