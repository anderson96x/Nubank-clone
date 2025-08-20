import styled from "styled-components/native";
import { colors } from "../../theme/tokens";
import Constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  margin-top: ${Constants.statusBarHeight + 15};
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${colors.primary};
  height: 25%;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.View`
  background-color: ${colors.secondary};
  flex: 1;
`;

export const HeaderIconsContainer = styled.View`
  /* background-color: red; */
  width: 90%;
  height: 48px;
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
  width: 45%;
  /* background-color: blue; */
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const UserGreetings = styled.Text`
  color: red;
`;
