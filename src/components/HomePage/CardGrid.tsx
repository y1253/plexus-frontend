import { SimpleGrid, Text } from "@chakra-ui/react";
import { HouseCard } from "./HouseCard";
import useHouse, { HouseObject } from "../../hooks/useHouse";
import BootstrapCard from "./BootstrapCard";
import { useNavigate } from "react-router-dom";
import { BootstrapLgCard } from "./BootstrapLgCard";

interface Props {
  selectedHouse: number | null;
}
export const CardGrid = ({ selectedHouse }: Props) => {
  const navigateRoute = useNavigate();
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
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        columnGap="10px"
        rowGap={"10px"}
        overflow={"hidden"}
        padding={"10px"}
      >
        {house?.map((hs) => (
          <HouseCard
            key={hs.unit_id}
            house={hs}
            navigate={() => {
              navigateRoute(`/home/${hs.unit_id}`);
            }}
          />
        ))}
      </SimpleGrid>
    </>
  );
};
