import { SimpleGrid } from "@chakra-ui/react";
import { HouseCard } from "./HouseCard";

export const CardGrid = () => {
  return (
    <>
      <SimpleGrid columns={2} columnGap="2" rowGap="4">
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </SimpleGrid>
    </>
  );
};
