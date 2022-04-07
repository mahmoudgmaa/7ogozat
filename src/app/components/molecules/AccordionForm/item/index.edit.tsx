import { useState } from "react";
import Header from "./Header";
import { ContentWrapper, MainWrapper } from "./styles";
import "./styles.css";

const Edit = ({children,item,deleteFun,ChildHeader,stylingProps}:any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MainWrapper style={stylingProps}>
      <Header
        setIsOpen={setIsOpen}
        children={ChildHeader || <></>}
        deleteFun={deleteFun}
        item={item}
      />
      <ContentWrapper
        className={isOpen|| item?.id==0 ? "content":"content hidden"  }
        isOpen={isOpen || item?.id==0}
      >
        {children}
      </ContentWrapper>
    </MainWrapper>
  );
};

export default Edit;
