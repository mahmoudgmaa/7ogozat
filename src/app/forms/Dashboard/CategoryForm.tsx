import MultiLanguageInput from "app/components/molecules/MultiLanguageInput";
import MultiLanguageTextArea from "app/components/molecules/MultiLanguageTextArea";
import { Form } from "formik";
import { useTranslation } from "react-i18next";
import Button from "../../components/atoms/Button";
const CategoryForm = ({ isLoading }: any) => {
  const { t } = useTranslation();
  return (
    <Form>
      <div className="form_items_wrapper">
        <MultiLanguageInput
          type="text"
          name={"name"}
          placeholder={t("category_name")}
          label={t("category_name")}
        />
        <MultiLanguageTextArea
          label={t("category_description")}
          placeholder={t("category_description")}
          name="description"
        />
        <Button type="submit" label={t("save")} />
      </div>
    </Form>
  );
};

export default CategoryForm;