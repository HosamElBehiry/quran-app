import { object, ref, string } from "yup";

export const loginValidation = object().shape({
  email: string().email("البريد غير صحيح").required("البريد الإلكترونى مطلوب"),
  password: string().required("كلمة المرور مطلوبة"),
});

export const registerValidation = object().shape({
  first_name: string().required("الإسم مطلوب"),
  last_name: string().required("الإسم مطلوب"),
  email: string().email("البريد غير صحيح").required("البريد الإلكترونى مطلوب"),
  password: string()
    .required("كلمة المرور مطلوبة")
    .min(8, "يجب أن تحتوى كلمة المرور على 8 حروف أو أرقام او رموز"),
  confirm_password: string()
    .oneOf(
      [ref("password"), null],
      "كلمة المرور وتأكيد كلمة المرور غير متوافقان"
    )
    .required("تأكيد كلمة المرور مطلوبه"),
});

export const registerInitialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
};

export const deleteInitialValues = {
  email: "",
  password: "",
  delete_reason: "",
};

export const deleteValidation = object().shape({
  email: string().email("البريد غير صحيح").required("البريد الإلكترونى مطلوب"),
  password: string().required("كلمة المرور مطلوبة"),
  delete_reason: string().required("سبب الحذف مطلوب"),
});
