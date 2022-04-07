import "./styles.ts";
import {ErrorMessage, useField} from "formik";
import Error from "../Error";
import { Input, InputWrapper, Wrapper } from "./styles";

const TextInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <Wrapper>
      <label>
        <InputWrapper>
          {label}
          <Input {...field} {...props} error={meta.touched && meta.error} />
        </InputWrapper>
      </label>
      <ErrorMessage {...props}/>
    </Wrapper>
  );
};

export default TextInput;
