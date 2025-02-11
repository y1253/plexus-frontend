import { Box, HStack, Image } from "@chakra-ui/react";
import { Picture } from "../../hooks/useHouse";

interface Props {
  picture: Picture[];
  changePicture: (p: string) => void;
}

const DetailPicturs = ({ picture, changePicture }: Props) => {
  return (
    <HStack justifyContent={"center"} padding={3}>
      {picture?.map((pc, index) => (
        <Box border={"solid 1px"} borderRadius={7} padding={1}>
          <Image
            key={index}
            src={pc.picture}
            height={"100px"}
            width={"100px"}
            rounded="md"
            crossOrigin="anonymous"
            onClick={() => changePicture(pc.picture)}
          />
        </Box>
      ))}
    </HStack>
  );
};

export default DetailPicturs;
