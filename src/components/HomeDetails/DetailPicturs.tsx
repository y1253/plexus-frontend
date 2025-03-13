import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { Picture } from "../../hooks/useHouse";

interface Props {
  picture: Picture[];
  currentMainPic: string;
  changePicture: (p: string) => void;
}

const DetailPicturs = ({ picture, changePicture, currentMainPic }: Props) => {
  return (
    <Box height={"80vh"} overflowY={"auto"}>
      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        //marginTop={"80px"}
        columnGap="20px"
        rowGap={"20px"}
        overflow={"hidden"}
        padding={"20px"}
      >
        {picture?.map((pc, index) => (
          <Box
            border={currentMainPic === pc.picture ? "solid 1px" : 0}
            borderRadius={7}
            padding={1}
            as="button"
            key={index}
          >
            <Image
              src={pc.picture}
              height={"100px"}
              width={"100px"}
              rounded="md"
              crossOrigin="anonymous"
              onClick={() => changePicture(pc.picture)}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default DetailPicturs;
