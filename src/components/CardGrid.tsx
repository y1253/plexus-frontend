import { SimpleGrid, Text } from "@chakra-ui/react";
import { HouseCard } from "./HouseCard";
import useHouse, { HouseObject } from "../hooks/useHouse";
import BootstrapCard from "./BootstrapCard";

interface Props {
  selectedHouse: number | null;
}
export const CardGrid = ({ selectedHouse }: Props) => {
  const {
    data: house,
    error,
    isLoading,
  } = useHouse(selectedHouse, [selectedHouse]);

  return (
    <>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        columnGap="10px"
        rowGap={"10px"}
        overflow={"hidden"}
        padding={"10px"}
      >
        {house?.map((hs) => (
          <HouseCard key={hs.id} house={hs} />
        ))}
      </SimpleGrid>
    </>
  );
};
