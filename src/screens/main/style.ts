import styled from "styled-components/native";
import { colors, fonts } from "../../theme/tokens";
import Constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${colors.primary};
  height: 25%;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.View`
  margin-top: ${Constants.statusBarHeight + 10};
  margin-bottom: ${Constants.statusBarHeight + 10};
  flex: 1;
  /* background-color: orange; */
`;

export const HeaderIconsContainer = styled.View`
  /* background-color: green; */
  width: 90%;
  height: 55px;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconUserContainer = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.13);
  justify-content: center;
  align-items: center;
`;

export const RightIconsContainer = styled.View`
  width: 35%;
  /* background-color: blue; */
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const UserGreetingsContainer = styled.View`
  /* background-color: green; */
  flex: 1;
  justify-content: center;
`;

export const UserGreetings = styled.Text`
  color: ${colors.secondary};
  font-size: 18px;
  font-family: ${fonts.Roboto_700Bold};
`;










export const Body = styled.View`
  background-color: ${colors.secondary};
  flex: 1;
`;
