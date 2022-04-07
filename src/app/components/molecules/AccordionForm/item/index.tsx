import FormEdit from "./index.edit";
import FormPreview from "./index.preview";

interface IForm {
  Edit: typeof FormEdit;
}

const DropDownForm = FormPreview as IForm & typeof FormPreview;

DropDownForm.Edit = FormEdit;

export default DropDownForm;
