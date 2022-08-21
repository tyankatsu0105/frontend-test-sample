import { Page } from "~design/layouts";
import { Main } from "~design/layouts";
import { Next } from "~shared/modules";

const Login: Next.NextPageWithLayout = () => {
  return (
    <Page align="center" title="Sign in">
      <p>aaaaaaaaaaaaa</p>
    </Page>
  );
};

Login.getLayout = Next.getLayout((page) => <Main>{page}</Main>);

export default Login;
