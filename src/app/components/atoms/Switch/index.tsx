import Switch from "@mui/material/Switch";
import { RowWrapper } from "app/businessAdmin/Business/styles";
import { useField, useFormikContext } from "formik";
import { images } from "images";
import { useTranslation } from "react-i18next";

const SwitchComponent = ({ name, method }: any) => {
  const [field, meta] = useField<any>(name);
  const { setFieldValue } = useFormikContext();
  const { t } = useTranslation();
  console.log(field);
  return (
    <RowWrapper style={{ alignItems: "center" }}>
      <Switch
        checked={field.value[method]}
        onChange={(e) =>
          setFieldValue(name, { ...field.value, [method]: e.target.checked })
        }
      />
      <img src={images[method]} />
      <p>{t(method)}</p>
    </RowWrapper>
  );
};

export default SwitchComponent;
