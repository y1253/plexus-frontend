import { Input } from "@chakra-ui/react";
import { useRef } from "react";
//import { useGenra } from "../../hooks/useGenra";
interface Props {
  id: (id: number) => void;
}
export const SearchInput = ({ id }: Props) => {
  //const { mutate, data } = useGenra();
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // if (ref.current)
        //   mutate({
        //     name: ref.current.value,
        //   });
        //console.log(data);

        if (ref.current) id(parseFloat(ref.current.value));
      }}
    >
      <Input
        ref={ref}
        borderRadius={20}
        placeholder="Search House"
        variant={"outline"}
      />
    </form>
  );
};
