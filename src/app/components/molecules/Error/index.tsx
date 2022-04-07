import React from "react";
import { ErrorMessage } from "formik";
import "./styles.css";
import { useTranslation } from "react-i18next";

const ErrorMsg = ({ name }: any) => {
  const { t } = useTranslation();
  return (
    <ErrorMessage name={name}>
      {(msg: any) => <p className="error_text">{"*" + t(msg)}</p>}
    </ErrorMessage>
  );
};

export default ErrorMsg;
