import ExapandableForm from "app/components/molecules/AccordionForm/item";
import { DashboardForms } from "app/forms/Dashboard";

const Staff = ({ currentPath }: any) => {
  const Form = DashboardForms[currentPath];

  return (
    <ExapandableForm.Edit label="staff1">
      <Form formName={currentPath} />
    </ExapandableForm.Edit>
  );
};

export default Staff;
