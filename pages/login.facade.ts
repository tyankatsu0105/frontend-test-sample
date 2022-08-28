import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import * as ReactHookForm from "react-hook-form";
import * as z from "zod";

import { useLoginMutation } from "~store/api";

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
  const { replace } = useRouter();
  const [login] = useLoginMutation();

  const onSubmit: Parameters<typeof handleSubmit>[0] = async (data) => {
    try {
      const { user } = await login({
        loginUserRequest: {
          user: { email: data.email, password: data.password },
        },
      }).unwrap();

      localStorage.setItem("token", user.token);
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
