import { Button, Input } from "~design/components";
import { Main, Page } from "~design/layouts";
import { Next } from "~shared/modules";

import { useForm } from "./login.facade";
import styles from "./login.module.scss";

const Login: Next.NextPageWithLayout = () => {
  const { errors, handleSubmit, onError, onSubmit, register } = useForm();

  return (
    <Page align="center" title="Sign in">
      <div className={styles.wrap}>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Input
            required
            className={styles.input}
            errorMessage={errors.email?.message}
            inputProps={{ type: "text", ...register("email") }}
            isError={!!errors.email}
            label="Email"
          />
          <Input
            required
            className={styles.input}
            errorMessage={errors.password?.message}
            inputProps={{
              type: "password",
              ...register("password"),
            }}
            isError={!!errors.password}
            label="Password"
          />
          <div className={styles.button}>
            <Button variant="box">Submit</Button>
          </div>
        </form>
      </div>
    </Page>
  );
};

Login.getLayout = Next.getLayout((page) => <Main>{page}</Main>);

export default Login;
