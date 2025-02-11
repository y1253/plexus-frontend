import { Button, Card, Image, Text } from "@chakra-ui/react";
import { HouseObject } from "../../hooks/useHouse";

interface Props {
  house: HouseObject;
  navigate: () => void;
}
export const HouseCard = ({ house, navigate }: Props) => {
  //const navigate = useNavigate();
  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <Card.Root maxW="sm" borderRadius={10} overflow={"hidden"} shadow={"xl"}>
      <Image
        width={400}
        height={350}
        crossOrigin="anonymous"
        src={house.main_picture}
        alt=""
      />
      <Card.Body gap="0">
        <Card.Title>{house.address}</Card.Title>
        <Card.Description>{house.description}</Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          ${numberWithCommas(house.price)}
        </Text>
      </Card.Body>
      <Card.Footer gap="0" justifyContent={"Center"}>
        <Button variant="solid" onClick={navigate}>
          Read More
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
