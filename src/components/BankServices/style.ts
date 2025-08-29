import styled from "styled-components/native";
import { colors, fonts } from "../../theme/tokens";

export const Container = styled.View`
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.View`
  width: 80px;
  align-items: center;
`;

export const IconContainer = styled.View`
  background-color: ${colors.gray};
  width: 70px;
  height: 70px;
  border-radius: 45px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: ${fonts.Roboto_500Medium};
  font-size: 12px;
  text-align: center;
  margin-top: 15px;
  width: 75px;
`;
