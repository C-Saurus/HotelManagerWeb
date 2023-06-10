import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const loginSchema = yup.object().shape({
  email: yup.string().required("Email is required!"),

  password: yup
    .string()
    .min(8, "Password must be between 8-20 characters!")
    .max(20, "Password must be between 8-20 characters!")
    .required("Password is required!"),
});

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required!")
    .email("Email must be right format"),

  username: yup
    .string()
    .min(8, "Username must be between 8-20 characters!")
    .max(20, "Username must be between 8-20 characters!")
    .required("Username is required!"),

  password: yup
    .string()
    .min(8, "Password must be between 8-20 characters!")
    .max(20, "Password must be between 8-20 characters!")
    .required("Password is required!"),
  phoneNum: yup
    .string()
    .min(10, "Phone number must be more than 9 number")
    .max(12, "Phone number must be less than 13 number")
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required!"),
});

export const profileSchema = yup.object().shape({
  email: yup.string().required("Email is required!"),
  name: yup
    .string()
    .min(8, "Username must be between 8-20 characters!")
    .max(20, "Username must be between 8-20 characters!")
    .required("Username is required!"),
  phoneNum: yup
    .string()
    .min(10, "Phone number must be more than 9 number")
    .max(12, "Phone number must be less than 13 number")
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required!"),
});

export const bookingSchema = yup.object().shape({
  checkIn: yup.date().required("You must be pick up checkIn time"),
  checkOut: yup.date().required("You must be pick up checkOut time"),
  number: yup.number().required("Number or room is required"),
  type: yup.string().required("You must pick room type"),
});

export const roomSchema = yup.object().shape({
  name: yup.string().required("You must enter name"),
  type: yup.string().required("You must pick a room type"),
  price: yup.number().required(),
});
