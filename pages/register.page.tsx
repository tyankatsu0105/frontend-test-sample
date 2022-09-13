import { Button, Input } from "~design/components";
import { Main, Page } from "~design/layouts";
import { Next } from "~shared/modules";

import { useForm } from "./register.facade";
import styles from "./register.module.scss";

const Login: Next.NextPageWithLayout = () => {
  const {
    errors,
    handleSubmit,
    isSubmitted,
    isValid,
    onError,
    onSubmit,
    register,
  } = useForm();

  return (
    <Page align="center" title="Sign up">
      <div className={styles.wrap}>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Input
            required
            className={styles.input}
            errorMessage={errors.email?.message}
            inputProps={{ testid: "email", type: "text", ...register("email") }}
            isError={!!errors.email}
            label="Email"
          />
          <Input
            required
            className={styles.input}
            errorMessage={errors.password?.message}
            inputProps={{
              testid: "password",
              type: "password",
              ...register("password"),
            }}
            isError={!!errors.password}
            label="Password"
          />
          <Input
            required
            className={styles.input}
            errorMessage={errors.username?.message}
            inputProps={{
              testid: "username",
              type: "text",
              ...register("username"),
            }}
            isError={!!errors.username}
            label="Username"
          />
          <div className={styles.button}>
            <Button disabled={isSubmitted && !isValid} variant="box">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Page>
  );
};

Login.getLayout = Next.getLayout((page) => <Main>{page}</Main>);

export default Login;
