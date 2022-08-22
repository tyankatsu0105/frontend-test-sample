import { zodResolver } from "@hookform/resolvers/zod";
import * as ReactHookForm from "react-hook-form";
import * as z from "zod";

import { useGetArticleQuery } from "~store/api";

type UseArticleProps = {
  skip: boolean;
  slug: string;
};
export const useArticle = (props: UseArticleProps) => {
  const result = useGetArticleQuery({ slug: props.slug }, { skip: props.skip });

  return result;
};

const schema = z.object({
  email: z.string().min(1, { message: "Required" }),
  password: z.string().min(1, { message: "Required" }),
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

  return {
    errors,
    handleSubmit,
    register,
  };
};
