import styled, { StyledComponent } from "styled-components";

export const HeaderMainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  border-color: #0d0d0d4d;
  border-width: 1px;
  border-style: solid;
  padding: 5px;
  flex-direction: row;
  align-items: center;
  border-radius: 5px 5px 0 0;
  font: normal normal normal 18px/25px Lato;
  flex-direction: column;
`;

export const ContentWrapper: StyledComponent<
  "div",
  any,
  any,
  never
> = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  flex-direction: column;
  border-color: #0d0d0d4d;
  border-width: ${({ isOpen }: any) =>
    isOpen ? "0 1px 1px 1px" : "0 1px 0 1px"};
  padding: ${({ isOpen }: any) => (isOpen ? "20px" : "0 20px")};
  border-style: solid;
  overflow: hidden;
  border-radius: 0 0 5px 5px;
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
