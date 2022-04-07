import styled, { StyledComponent } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const TextArea: StyledComponent<
  "textarea",
  any,
  any,
  never
> = styled.textarea`
  width: 30vw;
  height: 25vh;
  box-sizing: border-box;
  border-style: solid;
  outline-color: #97d6d5;
  resize: none;
  margin-left: ${({ position }: any) => position === "left" && "15px"};
  border-radius: ${({ position }: any) =>
    position === "left" ? "5px 0 0 5px" : "0 5px 5px 0"};
  padding: 10px;
  margin: 5px 0 0 0;
  border-color: ${({ error }: any) => (error ? "#ff0000" : "#c1c1c1")};
  border-width: ${({ position }: any) =>
    position === "left" ? "2px 0px 2px 2px" : "2px 2px 2px 2px"};
`;
