import { Grid, GridItem } from "@chakra-ui/react";
import BootstrapCard from "./components/HomePage/BootstrapCard";
import { CardGrid } from "./components/HomePage/CardGrid";
import { Outlet } from "react-router-dom";

export const MainRoute = () => {
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area={"nav"}>
        <BootstrapCard></BootstrapCard>
        <div style={{ height: "60px" }}></div>
      </GridItem>
      <GridItem area={"main"}>
        <Outlet />
      </GridItem>
    </Grid>
  );
};
