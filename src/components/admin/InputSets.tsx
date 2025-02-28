import { useEffect, useState } from "react";
import InputSet1 from "./InputSet1";
import InputSet2 from "./InputSet2";
import InputSet3 from "./InputSet3";
import { InputSet4 } from "./InputSet4";
import useAddHouse from "../../hooks/useAddHouse";
import {
  StepsCompletedContent,
  StepsContent,
  StepsItem,
  StepsList,
  StepsRoot,
} from "../ui/steps";
import { Spinner } from "@chakra-ui/react/spinner";
import { Alert } from "@chakra-ui/react/alert";
import { useNavigate } from "react-router-dom";

export const InputSets = () => {
  const [step, setStep] = useState(0);

  const [file, setFile] = useState<File>();
  const [files, setFiles] = useState<File[]>();
  const [fieldData, setFieldData] = useState<object>();

  const { mutate, isPending, error, isSuccess } = useAddHouse();
  const navigate = useNavigate();

  const submit = () => {
    setStep(4);
    const formData = new FormData();
    formData.append("info", JSON.stringify(fieldData));
    if (file) {
      formData.append("main_picture", file);
      formData.append("pictures", file);
    }
    files?.map((f) => formData.append("pictures", f));
    mutate(formData);
  };

  const next = (data: object) => {
    setFieldData({ ...fieldData, ...data });
    console.log(data);
    setStep(step + 1);
  };

  const per = () => setStep(step - 1);
  useEffect(() => {
    isSuccess && navigate("/admin/list");
    error && setStep(0);
  }, [error, isSuccess]);

  return (
    <>
      {isPending && (
        <Spinner size="xl" position={"absolute"} right={"50%"} top={"50%"} />
      )}
      {error && (
        <Alert.Root status="error" onClick={() => setStep(0)}>
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Invalid Fields</Alert.Title>
            <Alert.Description>
              Your form has some errors. Please fix them and try again.
            </Alert.Description>
          </Alert.Content>
        </Alert.Root>
      )}
      <StepsRoot defaultStep={0} count={4} padding={5} step={step}>
        <StepsList margin={4}>
          <StepsItem index={0} />
          <StepsItem index={1} />
          <StepsItem index={2} />
          <StepsItem index={3} />
        </StepsList>

        <StepsContent index={0}>
          <InputSet1 next={next} />
        </StepsContent>
        <StepsContent index={1}>
          <InputSet2 next={next} per={per} />
        </StepsContent>
        <StepsContent index={2}>
          <InputSet3 next={next} per={per} />
        </StepsContent>
        <StepsContent index={3}>
          <InputSet4
            onChange={(data) => {
              setFile(data);
            }}
            onChange2={(data) => {
              setFiles(data);
            }}
            submit={submit}
            per={per}
          />
        </StepsContent>
        <StepsCompletedContent>All steps are complete!</StepsCompletedContent>
      </StepsRoot>
    </>
  );
};
