import { Form } from "formik";
import { useTranslation } from "react-i18next";
import { RowWrapper } from "../../businessAdmin/Business/Info/styles";
import TextInput from "../../components/molecules/TextInput";
import Button from "../../components/atoms/Button";
import MultiLanguageInput from "../../components/molecules/MultiLanguageInput";

const customInputStyles = {
  width: "30vw",
  padding: "15px",
  fontSize: "1rem",
};

export const BusinessInfoForm = ({ setFieldValue }: any) => {
  const { t } = useTranslation();
  return (
    <Form>
      <RowWrapper>
        <TextInput
          style={customInputStyles}
          name="en_name"
          type={"text"}
          placeholder={t("business_name")}
          label={t("business_name")}
        />
        <TextInput
          style={customInputStyles}
          name="phone_number"
          type={"number"}
          placeholder={t("phone_number")}
          label={t("phone_number")}
        />
      </RowWrapper>
      <RowWrapper>
        <TextInput
          style={customInputStyles}
          name="email"
          type={"email"}
          placeholder={t("email")}
          label={t("email")}
        />

      </RowWrapper>
        <RowWrapper>
            <MultiLanguageInput
                style={customInputStyles}
                name="address"
                type={"text"}
                placeholder={t("address")}
                label={t("address")}
            />
        </RowWrapper>
      <RowWrapper>
        <TextInput
          style={customInputStyles}
          name="website_url"
          type={"text"}
          placeholder={t("website_url")}
          label={t("website_url")}
        />
        <TextInput
          style={customInputStyles}
          name="brand_logo"
          type={"file"}
          placeholder={t("brand_logo")}
          label={t("brand_logo")}
        />
      </RowWrapper>
      <RowWrapper>
        <TextInput
          style={customInputStyles}
          name="facebook_link"
          type={"text"}
          placeholder={t("facebook_link")}
          label={t("facebook_link")}
        />
        <TextInput
          style={customInputStyles}
          name="linkedin_link"
          type={"text"}
          placeholder={t("linkedin_link")}
          label={t("linkedin_link")}
        />
      </RowWrapper>
      <RowWrapper>
        <TextInput
          style={customInputStyles}
          name="instgram_link"
          type={"text"}
          placeholder={t("instgram_link")}
          label={t("instgram_link")}
        />
      </RowWrapper>
      <Button type="submit" label={t('save')}   />
    </Form>
  );
};
