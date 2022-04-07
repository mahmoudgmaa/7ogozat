import { Form } from "formik";
import { useTranslation } from "react-i18next";
import { RowWrapper } from "./styles";
import Input from "../../components/molecules/TextInput";
import Button from "../../components/atoms/Button";
import MultiLanguageInput from "app/components/molecules/MultiLanguageInput";
import MultiLanguageTextArea from "app/components/molecules/MultiLanguageTextArea";
import DurationInput from "app/components/molecules/DurationInput/index";
import { days_of_week } from "./days_of_week";

const customInputStyles = {
  width: "30vw",
  padding: "15px",
  fontSize: "1rem",
};

const StaffForm = ({ setFieldValue }: any) => {
  const {t} = useTranslation();
  return (
            <Form>
              <div className="form_items_wrapper">
                <MultiLanguageInput
                    type="text"
                    name={"name"}
                    placeholder={t("staff_name")}
                    label={t("staff_name")}
                />
                <RowWrapper>
                  <Input
                      style={customInputStyles}
                      name="phone_number"
                      type={"number"}
                      placeholder={t("phone_number")}
                      label={t("phone_number")}
                  />
                  <Input
                      style={customInputStyles}
                      name="email"
                      type={"email"}
                      placeholder={t("email")}
                      label={t("email")}
                  />
                </RowWrapper>
                <Input
                    style={customInputStyles}
                    name="staff_photo"
                    type={"file"}
                    placeholder={t("staff_photo")}
                    label={t("staff_photo")}
                    onChange={(event: any) => {
                      // setFieldValue("file", event.currentTarget.files[0]);
                    }}
                />
                <MultiLanguageTextArea
                    label={t("staff_description")}
                    placeholder={t("staff_description")}
                    name="description"
                />
                <Button type="submit" label={t("save")}/>
              </div>
            </Form>

  );
}



export default StaffForm;
