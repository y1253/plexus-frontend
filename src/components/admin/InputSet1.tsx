import { Button, createListCollection, HStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import InputFieldStructer from "./InputFieldStructer";

interface Props {
  next: (d: object) => void;
}

const InputSet1 = ({ next }: Props) => {
  const { register, handleSubmit, setValue } = useForm();

  const dataList = [
    { id: "address", name: "Address", type: "text" },
    { id: "city", name: "City", type: "text" },
    { id: "state", name: "State", type: "text" },
    { id: "zip_code", name: "Zip Code", type: "text" },
    { id: "sqft", name: "square Foot", type: "number" },
    { id: "price", name: "Price", type: "currency" },
    {
      id: "unit_type",
      name: "Unit Type",
      type: "select",
      options: createListCollection({
        items: [
          { label: "Condo", value: "Condo" },
          { label: "House", value: "House" },
          { label: "Apartment", value: "Apartment" },
          { label: "Townhome", value: "Townhome" },
        ],
      }),
    },
    { id: "on_market", name: "On Market", type: "chack" },
  ];

  const submit = handleSubmit((e) => {
    e["on_market"] ? null : (e["on_market"] = true);
    next(e);
  });
  return (
    <form onSubmit={submit} onKeyDown={(e) => e.key === "Enter" && submit}>
      <InputFieldStructer
        register={register}
        setValue={setValue}
        dataList={dataList}
      />
      <HStack marginTop={5}>
        <Button variant="outline" size="sm" type="submit">
          Next
        </Button>
      </HStack>
    </form>
  );
};

export default InputSet1;
