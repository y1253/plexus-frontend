import { HStack, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
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
        <Link to="/">
          <Text color={"white"}>Home</Text>
        </Link>
      </HStack>
      <Link to="/contact">
        <Text color={"white"}>Contact</Text>
      </Link>
    </HStack>
  );
};
