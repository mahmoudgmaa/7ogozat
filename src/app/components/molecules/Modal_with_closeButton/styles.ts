import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Button = styled.button`
  background: #313131;
  color: white;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
  margin-left: 5px;
  padding: 8px 16px;
  margin-top: 10px;
  font-size: 1.2rem;
  border: none;
  &:hover {
    background: #f13005;
    transition: 0.2s ease-in-out;
  }
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  --webkit-backdrop-filter: blur(10px);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  height: 200px;
  background: #fff;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  display: grid;
  position: relative;
  border-radius: 25px;
  z-index: 10000;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr;
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 200px;
  }
`;

export const ModalTitle = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: right;
  background: #313131;
  padding: 16px 16px;

  h3 {
    color: white;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100;
  background: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
