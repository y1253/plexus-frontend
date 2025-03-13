import { HStack, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <HStack
        paddingRight={"5%"}
        paddingLeft={"5%"}
        justifyContent={"space-between"}
        //padding={"10px"}
        bgColor={"black"}
        height={"80px"}
        position={"fixed"}
        width={"100%"}
        zIndex={5}
      >
        <HStack width={"20%"} justifyContent={"space-between"}>
          {/* <Image src={logo2} boxSize="60px" /> */}

          <Link to="/">
            <Text color={"white"}>Plexus Brokerage</Text>
          </Link>
          <Link to="/forSale">
            <Text color={"white"}>Buy</Text>
          </Link>
          <Link to="/forRent">
            <Text color={"white"}>Rent</Text>
          </Link>
        </HStack>
        <Link to="/contact">
          <Text color={"white"}>Contact</Text>
        </Link>
      </HStack>
      <HStack height={"80px"} />
    </>
  );
};
