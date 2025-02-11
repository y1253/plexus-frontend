import { SimpleGrid, Text } from "@chakra-ui/react";
import { HouseCard } from "./HouseCard";
import useHouse from "../../hooks/useHouse";
import { useNavigate } from "react-router-dom";

interface Props {
  selectedHouse: number | null;
}
export const CardGrid = ({ selectedHouse }: Props) => {
  const navigateRoute = useNavigate();
  const { data: house, error, isLoading } = useHouse(selectedHouse);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        marginTop={"20px"}
        columnGap="20px"
        rowGap={"20px"}
        overflow={"hidden"}
        padding={"20px"}
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
    </div>
  );
};
