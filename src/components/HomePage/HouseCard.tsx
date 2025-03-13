import { Badge, Button, Card, Image, Text } from "@chakra-ui/react";
import { HouseObject } from "../../hooks/useHouse";
import { HiStar } from "react-icons/hi";

interface Props {
  house: HouseObject;
  navigate: () => void;
}
export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export const HouseCard = ({ house, navigate }: Props) => {
  const d = new Date();

  return (
    <Card.Root
      maxW="sm"
      position={"relative"}
      borderRadius={10}
      overflow={"hidden"}
      shadow={"xl"}
      as="button"
      onClick={navigate}
    >
      {house.purchase_type === "sell" || house.purchase_type === "Sell" ? (
        <Badge
          position={"absolute"}
          top={0}
          left={0}
          size={"lg"}
          colorPalette="green"
          shadow={"sm"}
        >
          For Sale
        </Badge>
      ) : (
        <Badge
          position={"absolute"}
          top={0}
          left={0}
          size={"lg"}
          colorPalette="purple"
          shadow={"sm"}
        >
          For Rent
        </Badge>
      )}
      {Date.parse(house.listed_date) > d.setDate(d.getDate() - 7) && (
        <Badge
          variant="solid"
          colorPalette="blue"
          position={"absolute"}
          top={"57%"}
        >
          <HiStar />
          New Listing
        </Badge>
      )}
      <Image
        width={400}
        height={350}
        crossOrigin="anonymous"
        src={house.main_picture}
        alt=""
      />
      <Card.Body gap="0">
        <Card.Title>{toTitleCase(house.address)}</Card.Title>
        <Card.Description>{house.description}</Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          ${numberWithCommas(house.price)}{" "}
          {house.purchase_type === "Rent" && "/mo"}
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
