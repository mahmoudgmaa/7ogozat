import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "redux/store";
import CurrentPath from "redux/_selectedPath";
import styled from "styled-components";

const SidebarLink = styled.button`
  padding: 0;
  display: block;
  color: #ffffff;
  background-color: transparent;
  border: none;
  justify-content: left;
  align-items: center;
  width: 100%;
  margin: 20px 0 20px 20px;
  list-style: none;
  height: 70px;
  text-decoration: none;
  font-size: 16px;
  text-align: left;
  font-family: Lato;

  &:hover {
    background: #8c0e02;
    cursor: pointer;
    font-size: 18px;
    border-radius: 12px;
    font-weight: 900;
  }
`;

const ClickedLink = styled.div`
  &.clicked {
    margin-bottom: 10px;
    padding: 5px 0;
    background: #8c0e02;
    border-radius: 12px;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  &.clicked {
    font-size: 18px;
    font-weight: 900;
  }
`;

const SidebarLinkDescription = styled.p`
  margin-left: 10px;
  color: #ffffff;
  font-weight: normal;
  font-size: 16px;
`;

const SubMenu = ({
  item,
  isClicked,

}: any) => {
  const [subnav, setSubnav] = useState(false);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const showSubnav = (e: Event) => {
    e.preventDefault();
    setSubnav(!subnav);
  };

  const onButtonClicked = (e: any) => {
    // e.preventDefault();
    dispatch(CurrentPath.actions.doSetCurrentPath({ currentPath: item.title }));
  };

  return (
    <>
      <SidebarLink onClick={onButtonClicked}>
        <ClickedLink className={`${isClicked ? "clicked" : ""}`}>
          <SidebarLabel className={`${isClicked ? "clicked" : ""}`}>
            {item.title}
            {isClicked && (
              <SidebarLinkDescription>
                {item.description}
              </SidebarLinkDescription>
            )}
          </SidebarLabel>
        </ClickedLink>
      </SidebarLink>
    </>
  );
};

export default SubMenu;
