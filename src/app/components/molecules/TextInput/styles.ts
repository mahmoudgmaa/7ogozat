import styled, { StyledComponent } from "styled-components";

export const Input: StyledComponent<"input", any, any, never> = styled.input`
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0 0 0;
  width: 15vw;
  border-color: ${({ error }: any) => (error ? "#ff0000" : "#c1c1c1")};
  border-width: 2px;
  font-size: 14px;
  box-sizing: border-box;
  border-style: solid;
  outline-color: #97d6d5;

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media screen and (max-width: 1400px) {
    width: 20vw;
    padding: 10px;
  }
  @media screen and (max-width: 1000px) {
    width: 30vw;
    padding: 10px;
  }
  @media screen and (max-width: 668px) {
    width: 50vw;
    padding: 10px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 15px 0 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
