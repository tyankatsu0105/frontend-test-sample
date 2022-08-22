import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Input } from "~design/components";
import { Main, Page } from "~design/layouts";
import { Next } from "~shared/modules";

const schema = z.object({
  email: z.string().min(1, { message: "Required" }),
  password: z.string().min(1, { message: "Required" }),
});

export type FieldValues = z.infer<typeof schema>;

const Login: Next.NextPageWithLayout = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
  });

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
        <button type="submit">aaaaaaaaaa</button>
      </form>
    </Page>
  );
};

Login.getLayout = Next.getLayout((page) => <Main>{page}</Main>);

export default Login;
