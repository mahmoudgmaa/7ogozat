import {
  InputWrapper,
  Wrapper,
} from "app/components/molecules/TextInput/styles";
import { useField, useFormikContext } from "formik";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useTranslation } from "react-i18next";

export type MenuItem = {
  value: string;
  label: string;
};

const DropdownMenu = ({ name, options, label, stylingProp, ...props }: any) => {
  const [field, meta,helper] = useField(name);
  const { t } = useTranslation();
  return (
    <Wrapper>
      <InputWrapper style={stylingProp}>
        <FormControl>
          <InputLabel>{label}</InputLabel>
          <Select
            {...field}
            {...props}
            label={label}
            onChange={({ target }) => helper.setValue(target.value)}
          >
            {options?.map((item: MenuItem) => (
              <MenuItem value={item.value}>{t(item.label)}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </InputWrapper>
    </Wrapper>
  );
};

export default DropdownMenu;
