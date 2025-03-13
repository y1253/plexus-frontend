import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { HouseCard } from "../HomePage/HouseCard";

import { useNavigate } from "react-router-dom";

import useHouseForRent from "../../hooks/useHouseForRent";
const GetRental = () => {
  const navigateRoute = useNavigate();
  const { data: house, error, isLoading } = useHouseForRent();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {isLoading && (
        <Spinner size="xl" position={"absolute"} right={"50%"} top={"50%"} />
      )}
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        marginTop={"80px"}
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

export default GetRental;
