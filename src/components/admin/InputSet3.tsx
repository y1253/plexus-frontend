import { Button, Input, SimpleGrid } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
interface Props {
  next: (d: object) => void;
  previous: () => void;
}
const InputSet3 = ({ next, previous }: Props) => {
  const { register, handleSubmit, reset } = useForm();

  const dataList = [
    { id: "beds", name: "Beds", type: "number" },
    { id: "baths_full", name: "Baths Full", type: "number" },
    { id: "baths_helf", name: "Baths Half", type: "number" },
    { id: "heating", name: "Heating", type: "text" },
    { id: "cooling", name: "Cooling", type: "text" },
    { id: "fire_place", name: "Fire Place", type: "text" },
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
      <Button type="submit">Next</Button>
      <Button onClick={previous}>Previous</Button>
    </form>
  );
};

export default InputSet3;
