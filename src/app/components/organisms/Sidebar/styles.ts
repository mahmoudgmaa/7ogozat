import styled, { StyledComponent } from "styled-components";
import { Link, LinkProps } from "react-router-dom";

export const SideBarWrapper = styled.div`
  background: #0d0d0d;
  top: 0;
  bottom: 0;
  left: 100;
  position: absolute;
  width: 20vw;

  @media screen and (max-width: 1400px) {
    width: 30vw;
  }
  @media screen and (max-width: 1000px) {
    width: 30vw;
  }
  @media screen and (max-width: 668px) {
    width: 20vw;
  }
`;

export const MenuWrapper = styled.div`
  margin-top: 15vh;
  margin-left: 3vw;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
`;

export const LinkText: StyledComponent<
  any,
  any,
  { active: boolean },
  never
> = styled(Link)`
  text-decoration: none;
  color: white;
  margin-top: 15px;
  font-weight: 600;
  font-size: 1.3rem;
  padding: 15px;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
  background-color: ${({ active }: any) => (active ? "#8c0e02" : "#0d0d0d")};
  &:hover {
    background-color: #8c0e02;
    transition: 0.2s ease-in-out;
  }
`;
