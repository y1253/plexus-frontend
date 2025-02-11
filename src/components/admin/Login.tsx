import { Button, Input, Stack } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import useLogin from "../../hooks/useLogin";

interface FormValues {
  user_name: string;
  password: string;
}
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { mutate, data } = useLogin();

  const onSubmit = handleSubmit((d: object) => {
    mutate(d);
    console.log(d);
  });
  return (
    <form onSubmit={onSubmit}>
      <Stack gap="4" align="flex-start" maxW="sm">
        <Input
          {...register("user_name", { required: "Username is required" })}
        />

        <Input
          {...register("password", { required: "Password is required" })}
        />

        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};

export default Login;
