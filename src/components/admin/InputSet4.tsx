import { Button, HStack, Image, SimpleGrid } from "@chakra-ui/react";
import { useRef, useState } from "react";
import {
  FileUploadDropzone,
  FileUploadList,
  FileUploadRoot,
} from "../ui/file-upload";

interface Props {
  onChange: (d: File) => void;
  onChange2: (d: File) => void;
  submit: () => void;
  per: () => void;
}
export const InputSet4 = ({ onChange, onChange2, submit, per }: Props) => {
  return (
    <>
      <FileUploadRoot
        maxW="xl"
        alignItems="stretch"
        maxFiles={1}
        onFileChange={(e) => onChange(e.acceptedFiles["0"])}
      >
        <FileUploadDropzone
          label="Drag and drop here to upload"
          description=".png, .jpg up to 5MB"
        />
        <FileUploadList />
      </FileUploadRoot>
      <FileUploadRoot
        maxW="xl"
        alignItems="stretch"
        maxFiles={40}
        onFileChange={(e) => onChange2(e.acceptedFiles["0"])}
      >
        <FileUploadDropzone
          label="Drag and drop here to upload"
          description=".png, .jpg up to 5MB"
        />
        <FileUploadList />
      </FileUploadRoot>

      <HStack marginTop={5}>
        <Button variant="outline" size="sm" onClick={() => per()}>
          Per
        </Button>
        <Button variant="outline" size="sm" onClick={submit}>
          Next
        </Button>
      </HStack>
    </>
  );
};
