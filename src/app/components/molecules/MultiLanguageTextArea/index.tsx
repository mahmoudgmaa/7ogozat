import { useField } from "formik";
import { useTranslation } from "react-i18next";
import { MainWrapper, TextArea, Wrapper } from "./styles";
import Error from "../Error";

const MultiLanguageTextArea = ({ type, placeholder, label, ...props }: any) => {
  const { t, i18n } = useTranslation();
  const [field, meta] = useField<any>({ ...props, name: `ar_${props.name}` });
  const [field2, meta2] = useField({ ...props, name: `en_${props.name}` });

  return (
    <Wrapper>
      <p>{label}</p>
      <MainWrapper>
        <TextArea
          position={i18n.language === "en" ? "left" : "right"}
          placeholder={`${placeholder + " " + t("english")}`}
          error={meta.touched && meta2.error}
          {...props}
          {...field2}
        />
        <TextArea
          position={i18n.language === "en" ? "right" : "left"}
          placeholder={`${placeholder + " " + t("arabic")}`}
          error={meta.touched && meta.error}
          {...props}
          {...field}
        />
      </MainWrapper>
      {meta2.touched && meta2.error ? <Error {...field2} /> : null}
    </Wrapper>
  );
};

export default MultiLanguageTextArea;
