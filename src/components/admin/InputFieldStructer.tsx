import { Input, ListCollection, SimpleGrid } from "@chakra-ui/react";

import { Checkbox } from "../ui/checkbox";

import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../ui/select";

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
      {dataList.map((data) => (
        <Field label={data.name} key={data.id}>
          {data.type === "chack" && (
            <Checkbox
              defaultChecked
              onCheckedChange={(e) => setValue("on_market", !!e.checked)}
            ></Checkbox>
          )}

          {data.type === "select" && data.options && (
            <SelectRoot
              {...register(data.id)}
              collection={data.options}
              size="sm"
              width="320px"
              defaultValue={[data.options.items[0].value]}
            >
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
              placeholder={"$ "}
              decimalsLimit={2}
              onValueChange={(_value, _name, values) =>
                setValue(data.id, values?.float)
              }
            />
          )}
          {(data.type === "text" ||
            data.type === "number" ||
            data.type === "date") && (
            <Input
              {...register(data.id, { required: data.name + " is required" })}
              //placeholder={data.name}
              type={data.type}
              variant="flushed"
            />
          )}
        </Field>
      ))}
    </SimpleGrid>
  );
};

export default InputFieldStructer;
