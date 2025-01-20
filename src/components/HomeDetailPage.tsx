import { data, useParams } from "react-router-dom";

import { Grid, GridItem, Image } from "@chakra-ui/react";
import MainImage from "./HomeDetails/MainImage";
import DetailPicturs from "./HomeDetails/DetailPicturs";
import Footer from "./HomeDetails/Footer";
import useHouse from "../hooks/useHouse";

export const HomeDetailPage = () => {
  const params = useParams();

  const { data: house } = useHouse(params.id);
  if (house)
    return (
      <>
        <Grid templateAreas={`"main aside" "footer footer"`}>
          <GridItem area={"main"}>
            <MainImage main_image={house[0].main_picture} height="500px" />
          </GridItem>
          <GridItem area={"aside"}>
            <DetailPicturs picture={house[0].pictures} />
          </GridItem>
          <GridItem area={"footer"}>
            <Footer house={house[0]} />
          </GridItem>
        </Grid>
      </>
    );

  return <>Error</>;
};
