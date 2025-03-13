import { Image } from "@chakra-ui/react";

interface Props {
  main_image: string;
  height: string;
}

const MainImage = ({ main_image }: Props) => {
  return (
    <Image
      crossOrigin="anonymous"
      rounded="md"
      height={"80vh"}
      src={main_image}
    />
  );
};

export default MainImage;
