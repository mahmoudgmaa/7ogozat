import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { TBusiness } from "../../../../redux/business/model";
import {useSelector} from "react-redux";

const SidebarHeader = styled.p`
  margin-top: 50px;
  margin-left: 10px;
  color: #ffffff;
  font-size: 16px;
`;

const SidebarHeaderLink = styled.p`
  color: #ffffff;
  font-size: 10px;
  margin-left: 10px;
`;

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  min-width: 200px;
  width: 25vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  top: 0;
  left: -0%;
  transition: 350ms;
  z-index: 1;
`;

const SidebarWrap = styled.div`
  width: 80%;
  text-align: left;
`;

const Sidebar = () => {
  const currentPath = useSelector(
      (state: any) => state._currentPath.currentPath
  );
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <SidebarNav>
        <SidebarWrap>
          <SidebarHeader>Create Platform</SidebarHeader>
          <SidebarHeaderLink>Your Link:</SidebarHeaderLink>
          {SidebarData.map((item, index) => {
            return (
              <SubMenu
                isClicked={currentPath === item.title}
                item={item}
                key={index}
              />
            );
          })}
        </SidebarWrap>
      </SidebarNav>
    </IconContext.Provider>
  );
};

export default Sidebar;
