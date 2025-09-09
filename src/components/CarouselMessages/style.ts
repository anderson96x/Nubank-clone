import styled from "styled-components/native";
import { colors, fonts } from "../../theme/tokens";

export const Container = styled.View`
  margin-top: 20px;
  padding: 10px;
  border-radius: 20px;
  width: 100%;
  /* background-color: #eeeefe; */
  background-color: ${colors.gray};
  align-items: center;
`;

export const InnerContainer = styled.View`
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Text = styled.Text`
  color: ${colors.black};
  font-size: 14px;
  font-family: ${fonts.Roboto_400Regular};
`;
