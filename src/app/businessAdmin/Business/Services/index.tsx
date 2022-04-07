import ExapandableForm from "app/components/molecules/AccordionForm/item";
import HeaderChild from "./HeaderChild";
import ServicesForm from "../../../forms/Dashboard/ServicesForm";
import {Formik} from "formik";
import {dashboard_initial_values} from "../../../forms/initialValues";

const Services = ({ currentPath }: any) => {
    const onSubmit=(values: any, setSubmitting: any)=>{

    }
  return (
    <ExapandableForm.Edit ChildHeader={<HeaderChild />} label="service1">
        <Formik
            initialValues={dashboard_initial_values[currentPath]}
            onSubmit={onSubmit}
        >
      <ServicesForm />
        </Formik>
    </ExapandableForm.Edit>
  );
};

export default Services;
