import { useEffect, useState } from "react";

import axios from "axios";
import { CardGrid } from "./HomePage/CardGrid";
import { HouseCard } from "./HomePage/HouseCard";
import { Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "./HomePage/NavBar";
import { HouseObject } from "../hooks/useHouse";
import BootstrapCard from "./HomePage/BootstrapCard";

function App() {
  const [selectedHouse, setSelectedHose] = useState<number | null>(null);
  return <CardGrid selectedHouse={selectedHouse} />;
}

export default App;
