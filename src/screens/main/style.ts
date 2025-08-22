import styled from "styled-components/native";
import { colors, fonts } from "../../theme/tokens";
import Constants from "expo-constants";

const PADDING = "padding-left: 7%; padding-right: 7%";

export const Container = styled.View`
  flex: 1;
`;

// Header
export const Header = styled.View`
  background-color: ${colors.purple};
  height: 21%;
  ${PADDING};
  align-items: center;
`;

export const HeaderContainer = styled.View`
  /* background-color: orange; */
  margin-top: ${Constants.statusBarHeight + 10};
  flex: 1;
`;

export const HeaderIconsContainer = styled.View`
  /* background-color: green; */
  width: 100%;
  height: 55px;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconUserContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.13);
  width: 48px;
  height: 48px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const RightIconsContainer = styled.View`
  /* background-color: blue; */
  width: 35%;
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
  color: ${colors.white};
  font-size: 18px;
  font-family: ${fonts.Roboto_700Bold};
`;

// Body
export const Body = styled.View`
  background-color: ${colors.white};
  flex: 1;
  ${PADDING};
`;

export const BalanceContainer = styled.View`
  /* background-color: red; */
  height: 15%;
  justify-content: center;
`;

export const BalanceLabel = styled.Text`
  color: ${colors.black};
  font-size: 18px;
  font-family: ${fonts.Roboto_500Medium};
`;
