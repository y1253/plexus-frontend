import { Image } from "@chakra-ui/react";

interface Props {
  main_image: string;
  height: string;
}

const MainImage = ({ main_image, height }: Props) => {
  return (
    <Image
      crossOrigin="anonymous"
      rounded="md"
      height={height}
      src={main_image}
    />
  );
};

export default MainImage;
