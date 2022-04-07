import ExapandableForm from "app/components/molecules/AccordionForm/item";
import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { dashboard_initial_values } from "../initialValues";
import { DashboardSchemas } from "../schema";
import { ColumnWrapper, GreyParagraph, HeaderText, RowWrapper } from "./styles";
import Input from "../../components/molecules/TextInput";
import DropdownMenu from "app/components/atoms/Dropdown_select_menu";
import { customInputStyles, payment_methods, time_options } from "./values";
import SwitchComponent from "app/components/atoms/Switch";

const BusinessPolicyForm = ({ formName }: any) => {
  const { t } = useTranslation();
  const onFormSubmit = (values: any, setSubmitting: any, resetForm: any) => {
    console.log(values);
    resetForm();
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={dashboard_initial_values[formName || "business_policy"]}
      validationSchema={DashboardSchemas[formName || "business_policy"]}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        onFormSubmit(values, setSubmitting, resetForm);
      }}
    >
      <Form>
        {/* first box */}
        <ExapandableForm.Edit
          label={t("scheduling_policy")}
          NotExpandable={true}
          ChildHeader={
            <GreyParagraph>{t("scheduling_policy_paragraph")}</GreyParagraph>
          }
        >
          <RowWrapper>
            <ColumnWrapper>
              <HeaderText>{t("schedule_time")}</HeaderText>
              <HeaderText>{t("schedule_fewer_than")}</HeaderText>
              <RowWrapper>
                <Input
                  style={{ ...customInputStyles, width: "15vw", margin: 0 }}
                  name="fewer_time_in_advance"
                  type={"number"}
                  placeholder={t("cancelation_time_placeholder")}
                />
                <DropdownMenu
                  name="fewer_time_in_advance_option"
                  options={time_options}
                  label={t("in_advance")}
                  stylingProp={{ width: "10vw", marginLeft: 0, marginRight: 0 }}
                />
              </RowWrapper>
              <HeaderText>{t("schedule_more_than")}</HeaderText>
              <RowWrapper>
                <Input
                  style={{ ...customInputStyles, width: "15vw", margin: 0 }}
                  name="fewer_time_in_future"
                  type={"number"}
                  placeholder={t("cancelation_time_placeholder")}
                />
                <DropdownMenu
                  name="fewer_time_in_future_option"
                  options={time_options}
                  stylingProp={{ width: "10vw", marginLeft: 0, marginRight: 0 }}
                  label={t("in_future")}
                />
              </RowWrapper>
            </ColumnWrapper>
            <ColumnWrapper style={{ margin: "20px" }}>
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
                  stylingProp={{ width: "10vw", marginLeft: 0, marginRight: 0 }}
                />
              </RowWrapper>
            </ColumnWrapper>
          </RowWrapper>
        </ExapandableForm.Edit>
        <ExapandableForm.Edit
          label={t("payment_process")}
          NotExpandable={true}
          stylingProps={{ marginTop: "35px" }}
          ChildHeader={
            <GreyParagraph>{t("payment_process_paragraph")}</GreyParagraph>
          }
        ></ExapandableForm.Edit>
        <ExapandableForm.Edit
          label={t("payment_method")}
          NotExpandable={true}
          stylingProps={{ marginTop: "35px" }}
          ChildHeader={
            <GreyParagraph>{t("payment_process_paragraph")}</GreyParagraph>
          }
        >
          <ColumnWrapper>
            {payment_methods.map((item, index) => (
              <SwitchComponent name="payment_method" method={item.value} />
            ))}
          </ColumnWrapper>
        </ExapandableForm.Edit>
      </Form>
    </Formik>
  );
};

export default BusinessPolicyForm;
