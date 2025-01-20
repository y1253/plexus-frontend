import { GridItem, SimpleGrid } from "@chakra-ui/react";
import MainImage from "./MainImage";
import { Picture } from "../../hooks/useHouse";

interface Props {
  picture: Picture[];
}

const DetailPicturs = ({ picture }: Props) => {
  return (
    <SimpleGrid columns={2} gap={"24px"}>
      {picture?.map((pc, index) => (
        <MainImage key={index} main_image={pc.picture} height="100px" />
      ))}
    </SimpleGrid>
  );
};

export default DetailPicturs;
