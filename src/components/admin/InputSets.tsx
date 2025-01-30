import { useState } from "react";
import InputSet1 from "./InputSet1";
import InputSet2 from "./InputSet2";
import InputSet3 from "./InputSet3";
import { InputSet4 } from "./InputSet4";
import useAddHouse from "../../hooks/useAddHouse";

export const InputSets = () => {
  const [inputNumber, setInputNumber] = useState(1);
  const [file, setFile] = useState<File>();
  const [data, setData] = useState<object>();

  const { mutate, isPending } = useAddHouse();

  const submit = () => {
    const formData = new FormData();
    formData.append("info", JSON.stringify(data));
    if (file) {
      formData.append("main_picture", file);
      formData.append("pictures", file);
    }
    mutate(formData);
  };

  if (inputNumber === 4)
    return (
      <>
        {isPending && <h1>PANDING....</h1>}
        <InputSet4
          onSubmit={submit}
          onChange={(f) => setFile(f)}
          previous={() => setInputNumber(inputNumber - 1)}
        />
      </>
    );

  if (inputNumber === 3)
    return (
      <InputSet3
        next={(d) => {
          setData({ ...data, ...d });
          setInputNumber(4);
        }}
        previous={() => setInputNumber(inputNumber - 1)}
      />
    );

  if (inputNumber === 2)
    return (
      <InputSet2
        next={(d) => {
          setData({ ...data, ...d });
          setInputNumber(3);
        }}
        previous={() => setInputNumber(inputNumber - 1)}
      />
    );

  return (
    <InputSet1
      next={(data) => {
        setData(data);
        setInputNumber(2);
      }}
    />
  );
};
