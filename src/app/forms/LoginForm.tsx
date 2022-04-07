import { Form } from "formik";
import { useTranslation } from "react-i18next";
import Button from "../components/atoms/Button";
import TextInput from "../components/molecules/TextInput";

export const LoginForm = ({ isLoading }: any) => {
  const { t } = useTranslation();
  return (
    <Form>
      <div className="form_items_wrapper">
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
        <Button type="submit" label={t("login")} isLoading={isLoading} />
      </div>
    </Form>
  );
};
