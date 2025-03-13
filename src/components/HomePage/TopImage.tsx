import { Box, Text } from "@chakra-ui/react";
import background2 from "../../assets/background2.jpg";
const TopImage = () => {
  return (
    <Box
      height={"75vh"}
      position={"relative"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundSize={"cover"}
      bgImage={`url(${background2})`}
      //filter={"grayscale(90%)"}
    >
      <Box
        borderRadius={6}
        bgColor={"white"}
        paddingRight={6}
        paddingLeft={6}
        zIndex={1}
      >
        <Text textStyle="6xl">Plexus Brokerage</Text>
      </Box>
      <Box
        height={"75vh"}
        bgColor={"rgb(255, 252, 252,0.6)"}
        position={"absolute"}
        bottom={0}
        width={"100%"}
      ></Box>
    </Box>
  );
};

export default TopImage;
