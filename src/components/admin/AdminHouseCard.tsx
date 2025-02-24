import { Badge, Box, Button, Card, HStack, Image } from "@chakra-ui/react";
import { HouseObject } from "../../hooks/useHouse";

interface Props {
  HouseInfo: HouseObject;
}
export const AdminHouseCard = ({ HouseInfo }: Props) => (
  <Card.Root
    shadow={"lg"}
    flexDirection="row"
    overflow="hidden"
    width={{ lg: "800", sm: "xl", md: "800px" }}
  >
    <Image
      objectFit="cover"
      crossOrigin="anonymous"
      maxW="200px"
      src={HouseInfo.main_picture}
      alt="Caffe Latte"
    />
    <Box>
      <Card.Body>
        <Card.Title mb="2">{HouseInfo.address}</Card.Title>
        <Card.Description>{HouseInfo.description}</Card.Description>
        <HStack mt="4">
          <Badge>Hot</Badge>
          <Badge>Caffeine</Badge>
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Button>Details</Button>
      </Card.Footer>
    </Box>
  </Card.Root>
);
