import { Button, createListCollection, HStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import InputFieldStructer from "./InputFieldStructer";

interface Props {
  next: (d: object) => void;
  per: () => void;
}

const InputSet2 = ({ next, per }: Props) => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const purchase_type = watch("purchase_type");

  let dataList = [
    { id: "tag", name: "Tag", type: "text" },
    { id: "description", name: "Description", type: "text" },
    { id: "year_build", name: "Year Build", type: "date" },
    {
      id: "purchase_type",
      name: "Purchase Type",
      type: "select",
      options: createListCollection({
        items: [
          { label: "Sell", value: "Sell" },
          { label: "Rent", value: "Rent" },
        ],
      }),
    },
    { id: "price_per_sqft", name: "Price Per Sqft", type: "currency" },
    { id: "tex_amount", name: "Tex Amount", type: "currency" },
  ];

  const dataListRent = [
    {
      id: "gross_income_per_month",
      name: "gross income per month",
      type: "currency",
    },
    { id: "credit_score", name: "credit score", type: "number" },
    { id: "appliances", name: "appliances", type: "text" },
    { id: "management", name: "Management", type: "text" },
    { id: "lease_term", name: "Lease Term", type: "text" },
  ];

  if (purchase_type === "Rent") {
    dataList = [
      ...dataList.filter(
        (f) =>
          f.id !== "price_per_sqft" &&
          f.id !== "tex_amount" &&
          f.id !== "year_build"
      ),
      ...dataListRent,
    ];
  }
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

export default InputSet2;
