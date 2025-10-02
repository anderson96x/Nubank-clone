import styled from "styled-components/native";

export const Container = styled.View`
  /* background-color: green; */
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.View`
  background-color: rgba(255,255,255,0.95);
  flex-direction: row;
  padding: 15px;
  height: 60px;
  width: 270px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const IconWrapper = styled.View<{ selected?: boolean }>`
  background-color: ${({ selected }) =>
    selected ? "rgba(138,25,214,0.1)" : "transparent"};
  padding: 15px;
  padding-left: 21px;
  padding-right: 21px;
  border-radius: 50px;
`;
