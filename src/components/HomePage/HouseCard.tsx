import { Button, Card, Image, Text, Tooltip } from "@chakra-ui/react";
import { HouseObject } from "../../hooks/useHouse";
import { useNavigate } from "react-router-dom";

interface Props {
  house: HouseObject;
  navigate: () => void;
}
export const HouseCard = ({ house, navigate }: Props) => {
  //const navigate = useNavigate();
  return (
    <Card.Root
      maxW="lg"
      borderRadius={10}
      overflow={"hidden"}
      onClick={() => console.log("h")}
    >
      <Image
        height={300}
        crossOrigin="anonymous"
        src={house.main_picture}
        alt=""
      />
      <Card.Body gap="2">
        <Card.Title>{house.address}</Card.Title>
        <Card.Description>{house.description}</Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          ${house.price}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid" onClick={navigate}>
          Read More
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
