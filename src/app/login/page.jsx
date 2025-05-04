"use client";

import Link from "next/link";
import { useState } from "react";
import { EyeIcon } from "@/components/icons/eye-icon";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LogoTitle } from "@/components/global/logo-title";
import { EyelockIcon } from "@/components/icons/eye-lock-icon";
import { loginValidation } from "@/utils/validations";

const LoginPage = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  // const { push } = useRouter();
  const handleLogin = async (values) => {
    setLoading(true);
    // const res = await signIn("credentials", {
    //   email,
    //   password,
    //   callbackUrl: "/",
    //   redirect: false,
    // });
    // if (res?.status !== 200) {
    //   setFieldError("password", "البريد أو كلمة المرور غير صحيح");
    // } else {
    //   push("/user");
    // }
    setTimeout(() => {
      console.log({ values });
      setLoading(false);
    }, 1500);
  };
  return (
    <section className="flex flex-col items-center justify-center container max-sm:px-3 min-h-screen gap-3 mx-auto">
      <LogoTitle title="تسجيل الدخول" />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidation}
        onSubmit={handleLogin}
      >
        <Form className="*:mb-3 last:*:mb-0 w-120 max-sm:w-full max-sm:text-sm">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">البريد الإلكترونى</label>
            <Field
              name="email"
              type="email"
              placeholder="البريد الإلكترونى"
              className="p-2 border border-slate-200 rounded-md outline-none"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-xs text-red-600"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">كلمة المرور</label>
            <div className="relative p-2 border border-slate-200 rounded-md">
              <Field
                name="password"
                type={!show ? "password" : "text"}
                placeholder="كلمة المرور"
                className="w-11/12 outline-none"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute -translate-y-1/2 cursor-pointer top-1/2 end-2"
              >
                {!show ? (
                  <EyeIcon className="size-[18px]" />
                ) : (
                  <EyelockIcon className="size-[18px]" />
                )}
              </span>
            </div>
            <ErrorMessage
              name="password"
              component="p"
              className="text-xs text-red-600"
            />
            <Link href="#" className="flex justify-end text-sm">
              نسيت كلمة المرور
            </Link>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full p-2 text-white cursor-pointer hover:bg-sky-800/80 border rounded-md disabled:cursor-not-allowed font-semibold bg-sky-800 border-sky-800"
          >
            {loading ? "جارى التنفيذ..." : "دخول"}
          </button>
        </Form>
      </Formik>
      <div className="flex items-center justify-center gap-1">
        <span>ليس لدى حساب</span>
        <Link
          className="font-semibold text-sky-800 hover:underline"
          href="/register"
        >
          إشتراك
        </Link>
      </div>
    </section>
  );
};

export default LoginPage;
