import { Box, Button, HStack } from "@chakra-ui/react";

import {
  FileUploadDropzone,
  FileUploadList,
  FileUploadRoot,
} from "../ui/file-upload";

interface Props {
  onChange: (d: File) => void;
  onChange2: (d: File[]) => void;
  submit: () => void;
  per: () => void;
}
export const InputSet4 = ({ onChange, onChange2, submit, per }: Props) => {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <FileUploadRoot
          accept={["image/png", "image/jpeg"]}
          marginBottom={20}
          maxW="xl"
          alignItems="stretch"
          maxFiles={1}
          onFileChange={(e) => onChange(e.acceptedFiles["0"])}
        >
          <FileUploadDropzone
            label="Drag and drop Front Picture"
            description=".png, .jpg up to 5MB"
          />
          <FileUploadList showSize clearable />
        </FileUploadRoot>
        <FileUploadRoot
          accept={["image/png", "image/jpeg"]}
          maxW="xl"
          alignItems="stretch"
          maxFiles={40}
          onFileChange={(e) => {
            onChange2(e.acceptedFiles);
          }}
        >
          <FileUploadDropzone
            label="Drag and drop Additional pictures"
            description=".png, .jpg up to 5MB"
          />
          <FileUploadList showSize clearable />
        </FileUploadRoot>
      </Box>
      <HStack marginTop={5}>
        <Button variant="outline" size="sm" onClick={() => per()}>
          Per
        </Button>
        <Button variant="outline" size="sm" onClick={submit}>
          Submit
        </Button>
      </HStack>
    </>
  );
};
