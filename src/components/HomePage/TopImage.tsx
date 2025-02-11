import { Box } from "@chakra-ui/react";
import topImage from "../../assets/topImage.jpg";
const TopImage = () => {
  return (
    <Box
      height={"75vh"}
      backgroundSize={"cover"}
      bgImage={`url(${topImage})`}
      filter={"grayscale(70%)"}
    />
  );
};

export default TopImage;
