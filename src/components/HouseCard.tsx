import { Button, Card, Image, Text } from "@chakra-ui/react";
import { HouseObject } from "../hooks/useHouse";

interface Props {
  house: HouseObject;
}
export const HouseCard = ({ house }: Props) => {
  return (
    <Card.Root maxW="sm" borderRadius={10} overflow={"hidden"}>
      <Image
        height={200}
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
        <Button variant="solid">Read More</Button>
      </Card.Footer>
    </Card.Root>
  );
};
