import { Form } from "formik";
import TextInput from "../components/molecules/TextInput";
import { useTranslation } from "react-i18next";
import Button from "../components/atoms/Button";

export const BusinessForm = () => {
  const { t } = useTranslation();

  return (
    <Form>
      <div className="form_wrapper">
        <TextInput type="text" name="name" placeholder={t("name")} />
        <TextInput
          type="number"
          name="phone_number"
          placeholder={t("password")}
        />
        <TextInput
          type="email"
          name="email"
          placeholder={t("confirmation_password")}
        />
        <TextInput type="text" name="address" placeholder={t("name")} />
        <Button type="submit" label={t("create_account")} />
      </div>
    </Form>
  );
};
