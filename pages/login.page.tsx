import { Button, Input } from "~design/components";
import { Main, Page } from "~design/layouts";
import { Next } from "~shared/modules";

import { useForm } from "./login.facade";

const Login: Next.NextPageWithLayout = () => {
  const { errors, handleSubmit, register } = useForm();

  return (
    <Page align="center" title="Sign in">
      <form onSubmit={handleSubmit((d) => console.log(d))}>
        <Input
          errorMessage={errors.email?.message}
          inputProps={{ type: "text", ...register("email") }}
          isError={!!errors.email}
          label="Email"
        />
        <Input
          errorMessage={errors.password?.message}
          inputProps={{ type: "text", ...register("password") }}
          isError={!!errors.password}
          label="Password"
        />
        <Button variant="box">Submit</Button>
      </form>
    </Page>
  );
};

Login.getLayout = Next.getLayout((page) => <Main>{page}</Main>);

export default Login;
