import styled from "styled-components/native";
import { colors, fonts } from "../../theme/tokens";

export const Container = styled.View`
  flex-direction: column;
  margin-bottom: 20px;

  /* Cancelling parent's margins */
  margin-left: -20px;
  margin-right: -20px;
`;

export const FindOutMoreLabel = styled.Text`
  color: ${colors.black};
  font-size: 18px;
  font-family: ${fonts.Roboto_500Medium};
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const InnerContainer = styled.View`
  background-color: ${colors.gray};
  width: 240px;
  height: 320px;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  justify-content: top;
  align-items: center;
  flex-direction: column;
`;

export const PicContainer = styled.View`
  width: 240px;
  height: 120px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  justify-content: top;
`;

export const Label = styled.Text`
  font-family: ${fonts.Roboto_500Medium};
  font-size: 14px;
  margin-top: 30px;
  width: 200px;
`;

export const Description = styled.Text`
  font-family: ${fonts.Roboto_400Regular};
  font-size: 14px;
  margin-top: 15px;
  width: 200px;
  color: #8f8f8fff;
`;

export const ButtonContainer = styled.View`
  width: 240px;
  position: absolute;
  margin-top: 270px;
`;

export const ButtonPill = styled.View`
  justify-content: center;
  width: 100px;
  height: 40px;
  margin-left: 20px;
  margin-bottom: 10px;
  color: ${colors.white};
  background-color: ${colors.purple};
  border-radius: 25px;
`;

export const ButtonPillText = styled.Text`
  font-family: ${fonts.Roboto_500Medium};
  font-size: 16px;
  text-align: center;
  color: ${colors.white};
`;
