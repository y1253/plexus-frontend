import Image from "react-bootstrap/Image";
interface Props {
  image: string;
}

export const BootstarpImage = ({ image }: Props) => {
  return (
    <Image
      width={"27%"}
      height={"75%"}
      crossOrigin="anonymous"
      src={image}
      fluid
    />
  );
};
