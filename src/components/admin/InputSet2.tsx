import { Button, Input, SimpleGrid } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface Props {
  next: (d: object) => void;
  previous: () => void;
}

const InputSet2 = ({ next, previous }: Props) => {
  const { register, handleSubmit, reset } = useForm();

  const dataList = [
    { id: "tag", name: "Tag", type: "text" },
    { id: "description", name: "Description", type: "text" },
    { id: "year_build", name: "Year Build", type: "text" },
    { id: "purchase_type", name: "Purchase Type", type: "text" },
    { id: "price_per_sqft", name: "Price Per Sqft", type: "number" },
    { id: "tex_amount", name: "Tex Amount", type: "number" },
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

export default InputSet2;
