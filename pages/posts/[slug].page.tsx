import type { NextPage } from "next";

import { Page } from "~design/layouts";

import { useRouter } from "next/router";

const Post: NextPage = (props) => {
  const { query } = useRouter();
  const { slug } = query as { slug: string };

  console.log({ slug });

  return <Page title="Post">aaa</Page>;
};

export default Post;
