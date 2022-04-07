import styled from "styled-components";

// export const StyledTimePicker = styled(DurationInput)`
//   height: 30px;
//   font-size: 1.1rem;
//   margin-left: 5px;
// `;

export const TimePickersWrapper = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.p`
  font-size: 1.1rem;
`;

export const PickersWithCloseIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #0d0d0dd9;
  border-style: solid;
  width: 15vw;
  margin-left: 15px;
`;

export const Button = styled.button`
  background: #5dbfbe;
  width: 15vw;
  border: none;
  padding: 5px;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
`;
