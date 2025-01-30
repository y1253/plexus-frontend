import { Button, Input, SimpleGrid, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface Props {
  next: (d: object) => void;
}

const InputSet1 = ({ next }: Props) => {
  const { register, handleSubmit, reset } = useForm();
  //const onSubmit = handleSubmit((data) => console.log(data));

  const dataList = [
    { id: "address", name: "Address", type: "text" },
    { id: "city", name: "City", type: "text" },
    { id: "state", name: "State", type: "text" },
    { id: "zip_code", name: "Zip Code", type: "text" },
    { id: "sqft", name: "square Foot", type: "number" },
    { id: "price", name: "Price", type: "number" },
    { id: "unit_type", name: "Unit Type", type: "text" },
    { id: "on_market", name: "On Market", type: "number" },
  ];
  return (
    <form
      onSubmit={handleSubmit((data) => {
        next(data);
        reset();
      })}
    >
      <SimpleGrid columns={2} gap="40px">
        {dataList.map((data, index) => (
          <Input
            key={index}
            {...register(data.id)}
            placeholder={data.name}
            type={data.type}
            variant="flushed"
          />
        ))}
      </SimpleGrid>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default InputSet1;
