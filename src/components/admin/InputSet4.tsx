import { Button, Image, Input, SimpleGrid } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  onSubmit: () => void;
  previous: () => void;
  onChange: (d: File) => void;
}
export const InputSet4 = ({ onSubmit, onChange, previous }: Props) => {
  //const { register, handleSubmit, reset } = useForm();
  const [path, setPath] = useState<string>();
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <Image src={path} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
          //if (ref.current) onSubmit(ref.current?.value["0"]);
          console.log(ref.current?.value);
        }}
      >
        <SimpleGrid columns={2} gap="40px">
          <input
            type="file"
            name="file"
            id="file"
            accept=".png, .jpg"
            ref={ref}
            onChange={(e) => {
              if (e.target.files) {
                onChange(e.target.files["0"]);
              }
            }}
          />
        </SimpleGrid>
        <Button type="submit">Submit</Button>
        <Button onClick={previous}>Previous</Button>
      </form>
    </>
  );
};
