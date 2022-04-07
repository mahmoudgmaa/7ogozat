import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  password: Yup.string().min(6, "short").required("required"),
  confirmation_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "password_not_match")
    .required("required"),
  email: Yup.string().email("Invalid_email").required("required"),
});

export const LoginSchema = Yup.object().shape({
  password: Yup.string().min(6, "short").required("required"),
  email: Yup.string().email("Invalid_email").required("required"),
});

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const urlRegExp =
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

export const BusinessInfoSchema = Yup.object().shape({
  en_name: Yup.string().required("required"),
  phone_number: Yup.string()
    .matches(phoneRegExp, "Invalid_phone")
    .required("required"),
  email: Yup.string().email("Invalid_email").required("required"),
  en_address: Yup.string().required("required"),
  website_url: Yup.string().matches(urlRegExp, "Invalid_url"),
  facebook_link: Yup.string().matches(urlRegExp, "Invalid_url"),
  linkedin_link: Yup.string().matches(urlRegExp, "Invalid_url"),
  instagram_link: Yup.string().matches(urlRegExp, "Invalid_url"),
});

export const DashboardSchemas: any = {
  Categories: Yup.object().shape({
    en_name: Yup.string().required("required"),
    ar_name: Yup.string(),
    en_description: Yup.string(),
    ar_description: Yup.string(),
  }),
  business_info: Yup.object().shape({
    en_name: Yup.string().required("required"),
    phone_number: Yup.string()
      .matches(phoneRegExp, "Invalid_phone")
      .required("required"),
    email: Yup.string().email("Invalid_email").required("required"),
    address: Yup.string().required("required"),
    website_url: Yup.string().matches(urlRegExp, "Invalid_url"),
    facebook_link: Yup.string().matches(urlRegExp, "Invalid_url"),
    linkedin_link: Yup.string().matches(urlRegExp, "Invalid_url"),
    instagram_link: Yup.string().matches(urlRegExp, "Invalid_url"),
  }),
  services: Yup.object().shape({
    en_name: Yup.string().required("required"),
    ar_name: Yup.string(),
    en_description: Yup.string(),
    ar_description: Yup.string(),
    price: Yup.number().required("required"),
    tax: Yup.number().required("required"),
    staff_multiselect: Yup.string(),
    time_block_off_before: Yup.string(),
    time_block_off_after: Yup.string(),
    deposit: Yup.string(),
    cancelation_time_before_appointment: Yup.number().required("required"),
  }),
  staff: Yup.object().shape({
    en_name: Yup.string().required("required"),
    ar_name: Yup.string(),
    en_description: Yup.string(),
    ar_description: Yup.string(),
    phone_number: Yup.string().required("required"),
    email: Yup.string().required("required"),
  }),
  business_policy: Yup.object().shape({
    fewer_time_in_advance: Yup.number().required("required"),
    fewer_time_in_future: Yup.number().required("required"),
    cancelation_time_before_appointment: Yup.number().required("required"),
    deposit: Yup.number().required("required"),
    // payment_method: "",
  }),
};
