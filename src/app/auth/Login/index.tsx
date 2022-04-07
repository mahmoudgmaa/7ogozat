import { Formik } from "formik";
import { LoginSchema } from "../../forms/schema";
import { useTranslation } from "react-i18next";
import "./styles.css";
import { login_initial_values } from "../../forms/initialValues";
import { useAppDispatch } from "../../../redux/store";
import User from "../../../redux/user";
import { unwrapResult } from "@reduxjs/toolkit";
import HyperText from "../../components/molecules/HyperText";
import { LoginForm } from "../../forms/LoginForm";
import { useNavigate } from "react-router-dom";
import useCheckupSetter from "../../../hooks/useCheckup/useCheckupSetter";
import { CheckupKeys, ROUTES } from "../../../redux/constants";
import Modal from "../../components/molecules/Modal_with_closeButton";
import { useCallback, useState } from "react";
import Users from "../../../redux/user";
import { useLoadingSelector } from "../../../redux/selectors";

const LoginPage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoading = useLoadingSelector(User.thunks.doSignin);
  const { setCheckup } = useCheckupSetter();
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  interface Values {
    password: string;
    email: string;
  }

  const onFormSubmit = (values: any, setSubmitting: any) => {
    dispatch(User.thunks.doSignin(values))
      .then(unwrapResult)
      .then(onLoginSucces)
      .catch(onLoginFail);
    setSubmitting(false);
  };

  const onLoginSucces = useCallback(
    (res: any) => {
      const { token, client, uid } = res.headers;
      setCheckup(CheckupKeys.CLIENT_TOKEN, client);
      setCheckup(CheckupKeys.UID_TOKEN, uid);
      setCheckup(CheckupKeys.USER_TOKEN, token);
      dispatch(Users.thunks.doFetchSelf({}));

      navigate("/");
    },
    [dispatch]
  );

  const onLoginFail = useCallback(
    (err) => {
      const { data } = err.error;
      setErrorMessage(data.errors[0]);
      setShow(true);
    },
    [dispatch]
  );

  return (
    <section className="login_wrapper">
      <div className="main_wrapper">
        <h2>{t("login_to_acc")}</h2>
        <Formik
          initialValues={login_initial_values}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            onFormSubmit(values, setSubmitting);
          }}
        >
          <LoginForm isLoading={isLoading} />
        </Formik>
      </div>
      <HyperText
        text={t("Dont_have_acc")}
        link={t("signup")}
        toPath="/signup"
      />
      <Modal
        showModal={show}
        setShowModal={setShow}
        header="something went wrong"
        body={errorMessage}
        buttonText="cancel"
      />
    </section>
  );
};

export default LoginPage;
