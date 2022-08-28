import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import * as ReactHookForm from "react-hook-form";
import * as z from "zod";

import { useCreateArticleMutation } from "~store/api";

const schema = z.object({
  body: z.string().min(1, { message: "Required" }),
  description: z.string().min(1, { message: "Required" }),
  title: z.string().min(1, { message: "Required" }),
});

type FieldValues = z.infer<typeof schema>;
export const useForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = ReactHookForm.useForm<FieldValues>({
    resolver: zodResolver(schema),
  });
  const { replace } = useRouter();
  const [postArticle] = useCreateArticleMutation();

  const onSubmit: Parameters<typeof handleSubmit>[0] = async (data) => {
    try {
      await postArticle({
        newArticleRequest: {
          article: {
            body: data.body,
            description: data.description,
            title: data.title,
          },
        },
      });

      alert("Success!!");
      await replace("/");
    } catch (error) {
      console.error({ error });
    }
  };
  const onError: Parameters<typeof handleSubmit>[1] = (errors, e) => {
    console.log("onError");

    console.log({ e, errors });
  };

  return {
    errors,
    handleSubmit,
    onError,
    onSubmit,
    register,
  };
};
