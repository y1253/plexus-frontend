import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { SearchInput } from "./SearchInput";
interface Props {
  id: (id: number | null) => void;
}
export const NavBar = ({ id }: Props) => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Plexus Brokerage</Text>

      <SearchInput id={id} />
    </HStack>
  );
};
