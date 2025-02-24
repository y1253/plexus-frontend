import { HStack, SimpleGrid } from "@chakra-ui/react";
import useAdminHouse from "../../hooks/useAdminHouse";
import { AdminHouseCard } from "./AdminHouseCard";
import { AdminAddHouse } from "./AdminAddHouse";

const AdminList = () => {
  const { data } = useAdminHouse();
  return (
    <>
      <HStack justifyContent={"right"}>
        <AdminAddHouse />
      </HStack>
      <SimpleGrid justifyItems={"center"} columns={1} rowGap={4} margin={"5px"}>
        {data?.map((d) => (
          <AdminHouseCard HouseInfo={d} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default AdminList;
