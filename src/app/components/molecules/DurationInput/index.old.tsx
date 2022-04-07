import { Field, FieldArray, useFormikContext } from "formik";
import { useTranslation } from "react-i18next";
import {
  Label,
  TimePickersWrapper,
  RowWrapper,
  Wrapper,
  Button,
  MainWrapper,
  PickersWithCloseIconWrapper,
} from "./styles";
import { AiOutlineClose } from "react-icons/ai";

const TimePicker = ({ name }: any) => {
  // const { values } = useFormikContext<any>();
  // console.log(values);
  // const { t } = useTranslation();
  // return (
  //   <FieldArray name={name}>
  //     {({ insert, remove, push }) => (
  //       <Wrapper>
  //         <h3 style={{ margin: "5px 15px" }}>{t(name)}</h3>
  //         <MainWrapper>
  //           {values[name]?.length > 0 &&
  //             values[name]?.map((item: any, index: number) => (
  //               <PickersWithCloseIconWrapper>
  //                 <TimePickersWrapper>
  //                   <RowWrapper>
  //                     <Label>{t("from")}</Label>
  //                     <Field
  //                       component={StyledTimePicker}
  //                       name={`${name}.${index}.start`}
  //                       ampm
  //                       openTo="hours"
  //                       views={["hours", "minutes"]}
  //                       format="HH:mm"
  //                     />
  //                   </RowWrapper>
  //                   <RowWrapper>
  //                     <Label>{t("to")}</Label>
  //                     <Field
  //                       component={StyledTimePicker}
  //                       name={`${name}.${index}.end`}
  //                       ampm
  //                       openTo="hours"
  //                       views={["hours", "minutes"]}
  //                       format="HH:mm"
  //                     />
  //                   </RowWrapper>
  //                 </TimePickersWrapper>
  //                 <AiOutlineClose
  //                   size={20}
  //                   cursor="pointer"
  //                   onClick={() => remove(index)}
  //                 />
  //               </PickersWithCloseIconWrapper>
  //             ))}
  //           <Button
  //             type="button"
  //             onClick={() => push({ start: new Date(), end: new Date() })}
  //           >
  //             Add time slot
  //           </Button>
  //         </MainWrapper>
  //       </Wrapper>
  //     )}
  //   </FieldArray>
  // );
};

export default TimePicker;
