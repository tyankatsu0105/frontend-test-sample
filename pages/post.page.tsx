import { Button, Input, Textarea } from "~design/components";
import { Main, Page } from "~design/layouts";
import { Next } from "~shared/modules";

import { useForm } from "./post.facade";
import styles from "./post.module.scss";

const Post: Next.NextPageWithLayout = () => {
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
    <Page align="center" title="Post">
      <div className={styles.wrap}>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Input
            required
            className={styles.input}
            errorMessage={errors.title?.message}
            inputProps={{ testid: "title", type: "text", ...register("title") }}
            isError={!!errors.title}
            label="Title"
          />
          <Textarea
            required
            className={styles.input}
            errorMessage={errors.description?.message}
            isError={!!errors.description}
            label="Description"
            textareaProps={{
              testid: "description",
              ...register("description"),
            }}
          />
          <Textarea
            required
            className={styles.input}
            errorMessage={errors.body?.message}
            isError={!!errors.body}
            label="Body"
            textareaProps={{
              testid: "body",
              ...register("body"),
            }}
          />
          <div className={styles.button}>
            <Button
              disabled={isSubmitted && !isValid}
              testid="submit"
              variant="box"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Page>
  );
};

export const getLayout = Next.getLayout((page) => <Main>{page}</Main>);

Post.getLayout = getLayout;

export default Post;
