import ExapandableForm from "app/components/molecules/AccordionForm/item";
import { DashboardForms } from "app/forms/Dashboard";

const Category = ({ currentPath }: any) => {
  const Form = DashboardForms[currentPath];

  return (
    <ExapandableForm.Edit label="category1">
      <Form formName={currentPath} />
    </ExapandableForm.Edit>
  );
};

export default Category;
