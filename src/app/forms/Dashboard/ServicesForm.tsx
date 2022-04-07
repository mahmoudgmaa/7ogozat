import MultiLanguageInput from "app/components/molecules/MultiLanguageInput";
import MultiLanguageTextArea from "app/components/molecules/MultiLanguageTextArea";
import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import Button from "../../components/atoms/Button";
import { RowWrapper } from "../../businessAdmin/Business/styles";
import Input from "../../components/molecules/TextInput";
import DropdownMenu from "app/components/atoms/Dropdown_select_menu";
import {
  CancelationHeader,
  GreyParagraph,
  HeaderText,
  CancelationTimeWrapper,
  CancelationWrapper,
} from "./styles";
import { customInputStyles, dummy_options, time_options } from "./values";

const ServicesForm = () => {
  const { t } = useTranslation();

  return (
      <Form>
        <div className="form_items_wrapper">
          <MultiLanguageInput
            type="text"
            name={"name"}
            placeholder={t("service_name")}
            label={t("service_name")}
          />
          <MultiLanguageTextArea
            label={t("service_description")}
            placeholder={t("service_description")}
            name="description"
          />
          <RowWrapper>
            <Input
              style={customInputStyles}
              name="price"
              type={"number"}
              placeholder={t("price")}
              label={t("price")}
            />
            <Input
              style={customInputStyles}
              name="tax"
              type={"text"}
              placeholder={t("tax")}
              label={t("tax")}
            />
          </RowWrapper>
          <RowWrapper>
            <Input
              style={customInputStyles}
              name="time_block_off_before"
              type={"text"}
              placeholder={t("time_block_off_before")}
              label={t("time_block_off_before")}
            />
            <Input
              style={customInputStyles}
              name="time_block_off_after"
              type={"text"}
              placeholder={t("time_block_off_after")}
              label={t("time_block_off_after")}
            />
          </RowWrapper>
          <DropdownMenu
            name="staff_multiselect"
            label={t("staff_multiselect")}
            options={dummy_options}
          />
          <CancelationWrapper>
            <CancelationHeader>{t("cancelation_policy")}</CancelationHeader>
            <GreyParagraph>{t("cancelation_policy_paragraph")}</GreyParagraph>
          </CancelationWrapper>
          <RowWrapper>
            <Input
              style={customInputStyles}
              name="cancelation_deposit"
              type={"text"}
              placeholder={t("cancelation_deposit_placeholder")}
              label={t("cancelation_deposit_label")}
            />
            <CancelationTimeWrapper>
              <HeaderText>{t("cancelation_time")}</HeaderText>
              <RowWrapper>
                <Input
                  style={{ ...customInputStyles, width: "15vw", margin: 0 }}
                  name="cancelation_time"
                  type={"number"}
                  placeholder={t("cancelation_time_placeholder")}
                />
                <DropdownMenu
                  name="cancelation_time_option"
                  options={time_options}
                  stylingProp={{ width: "15vw", marginLeft: 0, marginRight: 0 }}
                  defaultValue="hour"
                />
              </RowWrapper>
            </CancelationTimeWrapper>
          </RowWrapper>
          <Button type="submit" label={t("save")} />
        </div>
      </Form>
  );
};

export default ServicesForm;
