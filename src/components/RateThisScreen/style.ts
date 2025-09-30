import styled from "styled-components/native";
import { colors, fonts } from "../../theme/tokens";

export const RateThisScreenContainer = styled.View`
  height: 80px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 5%;
`;

export const RateThisScreenTextContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const RateThisScreenLabel = styled.Text`
  color: ${colors.purple};
  font-size: 16px;
  font-family: ${fonts.Roboto_700Bold};
`;
