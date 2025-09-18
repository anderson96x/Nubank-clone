import styled from "styled-components/native";
import { colors, fonts } from "../../theme/tokens";

export const CreditCardContainer = styled.View`
  /* background-color: green; */
  height: 133px;
  flex-direction: row;
`;

export const CreditCardTextContainer = styled.View`
  /* background-color: red; */
  gap: 5px;
  width: 80%;
`;

export const CreditCardChevronContainer = styled.View`
  /* background-color: blue; */
  padding-top: 5px;
  align-items: flex-end;
  width: 20%;
`;

export const CreditCardLabel = styled.Text`
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

export const LimitLabel = styled.Text`
  color: #686868;
  font-size: 15px;
  font-family: ${fonts.Roboto_400Regular};
`;