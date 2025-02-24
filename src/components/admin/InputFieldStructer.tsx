import {
  Button,
  createListCollection,
  Input,
  ListCollection,
  SimpleGrid,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../ui/select";
import { NumberInputField, NumberInputRoot } from "../ui/number-input";
import { Field } from "../ui/field";
import CurrencyInput from "react-currency-input-field";

interface SelectObject {
  label: string;
  value: string;
}

interface InputObject {
  id: string;
  name: string;
  type: string;
  options?: ListCollection<SelectObject>;
}
interface Props {
  register: (d: string, O?: object) => object;
  setValue: (s: string, v: any) => void;
  dataList: InputObject[];
}
const InputFieldStructer = ({ register, setValue, dataList }: Props) => {
  return (
    <SimpleGrid columns={2} gap="40px">
      {dataList.map((data, index) => (
        <>
          {data.type === "chack" && (
            <Checkbox
              key={data.id}
              defaultChecked
              onCheckedChange={(e) => setValue("on_market", !!e.checked)}
            >
              On Market
            </Checkbox>
          )}

          {data.type === "select" && data.options && (
            <SelectRoot
              key={data.id}
              {...register(data.id)}
              collection={data.options}
              size="sm"
              width="320px"
              defaultValue={[data.options.items[0].value]}
            >
              <SelectLabel>Select {data.name}</SelectLabel>
              <SelectTrigger>
                <SelectValueText />
              </SelectTrigger>
              <SelectContent>
                {data.options?.items.map((movie) => (
                  <SelectItem item={movie} key={movie.value}>
                    {movie.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          )}
          {data.type === "currency" && (
            <CurrencyInput
              className="chakra-input css-10z39nw"
              required
              intlConfig={{ locale: "en-US", currency: "USD" }}
              id="input-example"
              name="input-name"
              placeholder={"Please enter " + data.name}
              decimalsLimit={2}
              onValueChange={(value, name, values) =>
                setValue(data.id, values?.float)
              }
            />
          )}
          {(data.type === "text" ||
            data.type === "number" ||
            data.type === "date") && (
            <Input
              {...register(data.id, { required: data.name + " is required" })}
              key={index}
              placeholder={data.name}
              type={data.type}
              variant="flushed"
            />
          )}
        </>
      ))}
    </SimpleGrid>
  );
};

export default InputFieldStructer;
