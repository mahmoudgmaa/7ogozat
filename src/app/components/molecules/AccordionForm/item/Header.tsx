import { HeaderMainWrapper, HeaderWrapper } from "./styles";
import * as RiIcons from "react-icons/ri";

const Header = ({ setIsOpen,children,item,deleteFun }: any) => {
  const onDropDownIconClicked = (e: any) => {
    setIsOpen((prev: any) => !prev);
    e.preventDefault();
  };

  return (
    <HeaderWrapper>
        <HeaderMainWrapper>
      <h3>{item?.en_name || "new" }</h3>
        <button

            onClick={deleteFun}
        />
      <button
        style={{ backgroundColor: "transparent", border: "none" }}
        onClick={onDropDownIconClicked}
      >

        <RiIcons.RiArrowDownSFill style={{ cursor: "pointer" }} />
      </button>
        </HeaderMainWrapper>
        {children}
    </HeaderWrapper>
  );
};

export default Header;
