import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Box, HStack } from "@chakra-ui/react";
import { Picture } from "../../hooks/useHouse";
interface Props {
  picture: Picture[];
}
const CarouselGallery = ({ picture }: Props) => {
  return (
    <HStack justifyContent={"center"}>
      <Box width={"35%"}>
        <Carousel
          className="slider-container"
          axis="horizontal"
          dynamicHeight={false}
          centerSlidePercentage={150}
        >
          {picture?.map((p) => (
            <div>
              <img src={p.picture} className="fit" />
            </div>
          ))}
        </Carousel>
      </Box>
    </HStack>
  );
};

export default CarouselGallery;
