"use client";

import Link from "next/link";
import { useState } from "react";
import { EyeIcon } from "@/components/icons/eye-icon";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { LogoTitle } from "@/components/global/logo-title";
import { EyelockIcon } from "@/components/icons/eye-lock-icon";
import { registerInitialValues, registerValidation } from "@/utils/validations";

const RegisterPage = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const handleRegister = async (values) => {
    setLoading(true);
    // const res = await register(values);
    // if (!res?.status || res?.status_code !== 200) {
    //   toast.error("حدث خطأ, برجاء إعادة المحاولة");
    // } else {
    //   push("/login");
    // }
    // setLoading(false);
    setTimeout(() => {
      console.log({ values });
      setLoading(false);
    }, 1500);
  };
  return (
    <section className="flex flex-col items-center justify-center container max-sm:px-3 min-h-screen gap-3 mx-auto">
      <LogoTitle title="تسجيل حساب جديد" />
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidation}
        onSubmit={handleRegister}
      >
        <Form className="*:mb-3 last:*:mb-0 w-120 max-sm:w-full max-sm:text-sm">
          <div className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
            <div className="flex flex-col gap-1">
              <label htmlFor="first-name"> الإسم الاول</label>
              <Field
                name="first_name"
                placeholder="الإسم الأول"
                className="p-2 border border-slate-200 rounded-md outline-none"
              />
              <ErrorMessage
                name="first_name"
                component="p"
                className="text-xs text-red-600"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="last-name">الإسم الأخير</label>
              <Field
                name="last_name"
                placeholder="الإسم الأخير"
                className="p-2 border border-slate-200 rounded-md outline-none"
              />
              <ErrorMessage
                name="last_name"
                component="p"
                className="text-xs text-red-600"
              />
            </div>
          </div>
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
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">إعادة كلمة المرور</label>
            <div className="relative p-2 border border-slate-200 rounded-md">
              <Field
                name="confirm_password"
                type={!confirmShow ? "password" : "text"}
                placeholder="إعادة كلمة المرور"
                className="w-11/12 outline-none"
              />
              <span
                onClick={() => setConfirmShow(!confirmShow)}
                className="absolute -translate-y-1/2 cursor-pointer top-1/2 end-2"
              >
                {!confirmShow ? (
                  <EyeIcon className="size-[18px]" />
                ) : (
                  <EyelockIcon className="size-[18px]" />
                )}
              </span>
            </div>
            <ErrorMessage
              name="confirm_password"
              component="p"
              className="text-xs text-red-600"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full p-2 text-white cursor-pointer hover:bg-sky-800/80 font-semibold border rounded-md disabled:cursor-not-allowed bg-sky-800 border-sky-800"
          >
            {loading ? "جار التنفيذ..." : "إشتراك"}
          </button>
        </Form>
      </Formik>
      <div className="flex items-center justify-center gap-1 mb-7">
        <span> لدى حساب</span>
        <Link
          className="font-semibold text-sky-800 hover:underline"
          href="/login"
        >
          تسجيل الدخول
        </Link>
      </div>
    </section>
  );
};

export default RegisterPage;
