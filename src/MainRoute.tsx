import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/HomePage/NavBar";

export const MainRoute = () => {
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area={"nav"}>
        <NavBar />
        <div style={{ height: "60px" }}></div>
      </GridItem>
      <GridItem area={"main"}>
        <Outlet />
      </GridItem>
    </Grid>
  );
};
