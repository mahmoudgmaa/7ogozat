import styled from "styled-components";

export const Wrapper = styled.section`
  margin-left: 2vw;
  @media screen and (max-width: 1000px) {
    margin-left: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const BrandHeaderSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const BrandImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: #0d0d0d;
  margin-right: 15px;
  margin-left: 15px;
`;

export const LanguageButton = styled.button`
  border: none;
  padding: 0;
  margin-top: 5px;
  margin-bottom: 0;
  background-color: white;
  cursor: pointer;
  margin-right: 15px;
  margin-left: 15px;
  font-weight: 700;
  color: #8c0e02;
  &:hover {
    color: black;
  }
`;

export const BodyWrapper = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
