import { Button, HStack, Text } from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";

export const AdminNavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <HStack
        justifyContent={"space-between"}
        padding={"10px"}
        bgColor={"black"}
        height={"60px"}
        position={"fixed"}
        width={"100%"}
        zIndex={1}
      >
        <HStack>
          {/* <Image src={logo2} boxSize="60px" /> */}
          <Text color={"white"}>Plexus Brokerage</Text>
          <Link to="/admin/list">
            <Text color={"white"}>Home</Text>
          </Link>
        </HStack>
        <Link to="/contact">
          <Text color={"white"}>Contact</Text>
        </Link>
        <Button
          onClick={() => {
            localStorage.removeItem("x-auth-token");
            navigate("/");
          }}
        >
          logOut
        </Button>
      </HStack>
      <HStack height={"60px"} />
    </>
  );
};
