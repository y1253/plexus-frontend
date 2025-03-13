import { useParams } from "react-router-dom";

import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import MainImage from "./HomeDetails/MainImage";
import DetailPicturs from "./HomeDetails/DetailPicturs";
import Footer from "./HomeDetails/Footer";
import useHouse from "../hooks/useHouse";
import { useState } from "react";
import FooterRental from "./HomeDetails/FooterRental";

export const HomeDetailPage = () => {
  const params = useParams();

  const { data: house } = useHouse(params.id);

  const [mainPicture, setMainPicture] = useState<string>();

  if (house)
    return (
      <>
        <Grid templateAreas={`"main main"  "footer footer"`}>
          <GridItem area={"main"} display={"flex"} justifyContent={"center"}>
            <Box
              padding={"5px 0 0 0 "}
              borderRadius={10}
              width={"100%"}
              margin={1}
              display={"flex"}
              alignItems={"center"}
            >
              <HStack
                justifyContent={"center"}
                shadow={"lg"}
                width={"80%"}
                padding={2}
                borderRadius={8}
              >
                <MainImage
                  main_image={mainPicture || house[0].main_picture}
                  height="500px"
                />
              </HStack>
              <DetailPicturs
                currentMainPic={mainPicture || house[0].main_picture}
                picture={house[0].pictures}
                changePicture={(p) => setMainPicture(p)}
              />
            </Box>
          </GridItem>
          <GridItem width={"100%"} area={"footer"}>
            {house[0].purchase_type === "Rent" ? (
              <FooterRental house={house[0]} />
            ) : (
              <Footer house={house[0]} />
            )}
          </GridItem>
        </Grid>
      </>
    );
};
