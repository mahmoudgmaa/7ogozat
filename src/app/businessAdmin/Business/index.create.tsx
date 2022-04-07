import {
  business_info_values,
  login_initial_values,
} from "../../forms/initialValues";
import {BusinessInfoSchema, DashboardSchemas, LoginSchema} from "../../forms/schema";
import { LoginForm } from "../../forms/LoginForm";
import {Form, Formik} from "formik";
import { BusinessForm } from "../../forms/BusinessForm";
import { useAppDispatch } from "redux/store";
import { BusinessInfoForm } from "app/forms/Dashboard/BusinessInfoForm";
import {
  BodyWrapper,
  BrandHeaderSide,
  BrandImage,
  Header,
  LanguageButton,
  Wrapper,
} from "./styles";
import { useTranslation } from "react-i18next";
import Business from "redux/business";
import {RowWrapper} from "./Info/styles";
import TextInput from "../../components/molecules/TextInput";
import MultiLanguageInput from "../../components/molecules/MultiLanguageInput";
import Button from "../../components/atoms/Button";
import React from "react";


const customInputStyles = {
  width: "30vw",
  padding: "15px",
  fontSize: "1rem",
};

export const CreateBusiness = () => {
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();

  const onFormSubmit = (values: any) => {
    dispatch(Business.thunks.doCreateBusiness(values))
  };
  return (
    <Wrapper>
      <Header>
        <h2>{t("Business_info")}</h2>
        <BrandHeaderSide>
          <LanguageButton>
            {i18n.language === "en" ? "AR" : "EN"}
          </LanguageButton>
          <p>Brand Name</p>
          <BrandImage />
        </BrandHeaderSide>
      </Header>
      <BodyWrapper>
        <div>
          <h1>Create new Business</h1>
          <Formik
              initialValues={business_info_values}
              validationSchema={BusinessInfoSchema}
              onSubmit={(values) => {
                console.log(values);
                onFormSubmit(values);
              }}
          >
            <BusinessInfoForm />
          </Formik>
          {/*<Formik*/}
          {/*  initialValues={business_info_values}*/}
          {/*  validationSchema={BusinessInfoSchema}*/}
          {/*  onSubmit={(values, { setSubmitting }) => {*/}
          {/*    console.log(values);*/}
          {/*    onFormSubmit(values, setSubmitting);*/}
          {/*  }}*/}
          {/*>*/}

          {/*</Formik>*/}
        </div>
      </BodyWrapper>
    </Wrapper>
  );
};
