import { Form } from "formik";
import TextInput from "../components/molecules/TextInput";
import { useTranslation } from "react-i18next";
import Button from "../components/atoms/Button";

export const RegistrationForm = ({ isLoading, isSubmitting }: any) => {
  const { t } = useTranslation();

  return (
    <Form>
      <div className="form_wrapper">
        <TextInput
          type="email"
          name="email"
          placeholder={t("email")}
          label={t("email")}
        />
        <TextInput
          type="password"
          name="password"
          placeholder={t("password")}
          label={t("password")}
        />
        <TextInput
          type="password"
          name="confirmation_password"
          placeholder={t("confirmation_password")}
          label={t("confirmation_password")}
        />
        <Button
          type="submit"
          label={t("create_account")}
          isLoading={isLoading}
        />
      </div>
    </Form>
  );
};
