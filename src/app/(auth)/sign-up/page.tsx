import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";
import { SignUpCard } from "@/features/auth/components/sign-up-card";
import { client } from "@/lib/rpc";

const SignUpPage = async () => {
  // 获取当前登录状态，已登录则重定向到主页面
  const user = await getCurrent();
  if (user) redirect("/");
  return <SignUpCard />;
};

export default SignUpPage;
