import { Button, HStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import InputFieldStructer from "./InputFieldStructer";
interface Props {
  next: (d: object) => void;
  per: () => void;
}
const InputSet3 = ({ next, per }: Props) => {
  const { register, handleSubmit, setValue } = useForm();
  const dataList = [
    { id: "beds", name: "Beds", type: "number" },
    { id: "baths_full", name: "Baths Full", type: "number" },
    { id: "baths_helf", name: "Baths Half", type: "number" },
    { id: "heating", name: "Heating", type: "text" },
    { id: "cooling", name: "Cooling", type: "text" },
    { id: "fire_place", name: "Fire Place", type: "text" },
  ];
  const submit = handleSubmit((e) => next(e));
  return (
    <form onSubmit={submit}>
      <InputFieldStructer
        register={register}
        setValue={setValue}
        dataList={dataList}
      />
      <HStack marginTop={5}>
        <Button variant="outline" size="sm" onClick={() => per()}>
          Per
        </Button>
        <Button variant="outline" size="sm" type="submit">
          Next
        </Button>
      </HStack>
    </form>
  );
};

export default InputSet3;
