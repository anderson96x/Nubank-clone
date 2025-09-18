import styled from "styled-components/native";
import { colors, fonts } from "../../theme/tokens";

export const LoanContainer = styled.View`
  /* background-color: green; */
  height: 97px;
  flex-direction: row;
`;

export const LoanTextContainer = styled.View`
  /* background-color: red; */
  gap: 5px;
  width: 80%;
`;

export const LoanChevronContainer = styled.View`
  /* background-color: blue; */
  padding-top: 5px;
  align-items: flex-end;
  width: 20%;
`;

export const LoanLabel = styled.Text`
  color: ${colors.black};
  font-size: 18px;
  font-family: ${fonts.Roboto_500Medium};
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  color: ${colors.black};
  font-size: 16px;
  font-family: ${fonts.Roboto_400Regular};
`;