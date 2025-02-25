import { Alert, Button, Input, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Field } from "../ui/field";
import { PasswordInput } from "../ui/password-input";
import useLogin from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";

interface FormValues {
  user_name: string;
  password: string;
}
const Login = () => {
  const navigateRoute = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { mutate, data, error, isPending } = useLogin();

  const onSubmit = handleSubmit((d: object) => {
    mutate(d);
  });
  if (data) {
    localStorage.setItem("x-auth-token", data["x-auth-token"]);
    navigateRoute(`/Admin/list`);
  }
  return (
    <>
      {error && (
        <Alert.Root status="error">
          <Alert.Indicator />
          <Alert.Title>Invalid User Name Or Password</Alert.Title>
        </Alert.Root>
      )}
      <form
        onSubmit={onSubmit}
        onKeyDown={(e) => e.key === "Enter" && onSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          height: "65vh",
          alignItems: "center",
        }}
      >
        <Stack gap="4" align="flex-start" maxW="xl">
          <Field
            label="Username"
            invalid={!!errors.user_name}
            errorText={errors.user_name?.message}
          >
            <Input
              {...register("user_name", { required: "Username is required" })}
            />
          </Field>

          <Field
            label="Password"
            invalid={!!errors.password}
            errorText={errors.password?.message}
          >
            <PasswordInput
              {...register("password", { required: "Password is required" })}
            />
          </Field>

          <Button disabled={isPending} type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default Login;
