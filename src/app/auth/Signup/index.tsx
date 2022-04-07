import { Formik, Form } from "formik";
import { SignupSchema } from "../../forms/schema";
import "./styles.css";
import { sign_up_initial_values } from "../../forms/initialValues";
import User from "../../../redux/user";
import HyperText from "../../components/molecules/HyperText";
import { useTranslation } from "react-i18next";
import { RegistrationForm } from "../../forms/RegistrationForm";
import { useCallback, useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../../redux/store";
import Modal from "../../components/molecules/Modal_with_closeButton";
import { useLoadingSelector } from "../../../redux/selectors";

const RegistrationPage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useLoadingSelector(User.thunks.doSignUp);
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onFormSubmit = (values: any, setSubmitting: any) => {
    setSubmitting(false);
    dispatch(User.thunks.doSignUp({ business_admin: values }))
      .then(unwrapResult)
      .then(onSignupSuccess)
      .catch(onSignupfail);
  };

  const onSignupSuccess = useCallback(() => {
    window.open("/login");
  }, [dispatch]);

  const onSignupfail = useCallback(
    (err) => {
      const { data } = err.error.response;
      if (data.email[0]) setErrorMessage("email " + data.email[0]);
      setShow(true);
    },
    [dispatch]
  );

  return (
    <section className="signup_wrapper">
      <div className="main_wrapper">
        <h2>{t("sign_up")}</h2>
        <Formik
          initialValues={sign_up_initial_values}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            onFormSubmit(values, setSubmitting);
          }}
        >
          <RegistrationForm isLoading={isLoading} />
        </Formik>
        <HyperText
          text={t("Already_have_account")}
          link={t("login")}
          toPath="/login"
        />
      </div>
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

export default RegistrationPage;
