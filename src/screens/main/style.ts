import styled from "styled-components/native";
import { colors, fonts } from "../../theme/tokens";
import Constants from "expo-constants";

const MARGIN = "margin-left: 20px; margin-right: 20px;";

export const Container = styled.View`
  flex: 1;
`;

// Header
export const Header = styled.View`
  background-color: ${colors.purple};
  height: 21.5%;
  align-items: center;
`;

export const HeaderContainer = styled.View`
  /* background-color: orange; */
  margin-top: ${Constants.statusBarHeight + 10};
  flex: 1;
  ${MARGIN};
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
  ${MARGIN};
`;

export const BalanceContainer = styled.View`
  /* background-color: green; */
  height: 15%;
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

export const MyCardsContainer = styled.View`
  background-color: ${colors.gray};
  border-radius: 20px;
  height: 10%;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const MyCards_IconContainer = styled.View`
  ${MARGIN};
`;

export const MyCardsLabel = styled.Text`
  color: ${colors.black};
  font-size: 15px;
  font-family: ${fonts.Roboto_500Medium};
`;

export const Hr = styled.View`
  background-color: ${colors.gray};
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: -20px;
  height: 2px;
  width: 150%;
`;