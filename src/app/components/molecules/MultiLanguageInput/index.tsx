import { useField } from "formik";
import { Input, MainWrapper, Wrapper } from "./styles";
import Error from "../Error";
import { useTranslation } from "react-i18next";

const MultiLanguageInput = ({ type, placeholder, label, ...props }: any) => {
  const [arField, arMeta] = useField<any>({ ...props, name: `ar_${props.name}` });
  const [enField, enMeta] = useField({ ...props, name: `en_${props.name}` });
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <p>{label}</p>
      <MainWrapper>
        <Input
          position={i18n.language === "en" ? "left" : "right"}
          type={type}
          placeholder={`${placeholder} ${t("english")}`}
          error={arMeta.touched && enMeta.error}
          {...enField}
        />
        <Input
          position={i18n.language === "en" ? "right" : "left"}
          type={type}
          placeholder={`${placeholder} ${t("arabic")}`}
          error={arMeta.touched && arMeta.error}
          {...arField}
        />
      </MainWrapper>
      {enMeta.touched && enMeta.error ? <Error {...enField} /> : null}
    </Wrapper>
  );
};

export default MultiLanguageInput;
