import { DashboardForms } from "app/forms/Dashboard";

const BusinessPolicy = ({ currentPath }: any) => {
  const Form = DashboardForms[currentPath || "business_policy"];

  return <Form formName={currentPath} />;
};

export default BusinessPolicy;
