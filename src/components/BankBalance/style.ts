import styled from "styled-components/native";
import { colors, fonts } from "../../theme/tokens";

export const BalanceContainer = styled.View`
  /* background-color: green; */
  height: 90px;
  flex-direction: row;
  padding-top: 5%;
  padding-bottom: 5%;
`;

export const BalanceTextContainer = styled.View`
  /* background-color: red; */
  gap: 5px;
  width: 80%;
`;

export const BalanceChevronContainer = styled.View`
  /* background-color: blue; */
  padding-top: 5px;
  align-items: flex-end;
  width: 20%;
`;

export const BalanceLabel = styled.Text`
  color: ${colors.black};
  font-size: 18px;
  font-family: ${fonts.Roboto_500Medium};
`;
