import IconClosedEyeSVG from "../../../assets/svg/IconClosedEyeSVG";
import IconHelpSVG from "../../../assets/svg/IconHelpSVG";
import IconMessagePlusSVG from "../../../assets/svg/IconMessagePlusSVG";
import IconUserSVG from "../../../assets/svg/IconUserSVG";
import {
  Body,
  Container,
  Header,
  HeaderContainer,
  HeaderIconsContainer,
  IconUserContainer,
  RightIconsContainer,
  UserGreetings,
} from "./style";

const Home = () => {
  return (
    <Container>
      <Header>
        <HeaderContainer>
          <HeaderIconsContainer>
            <IconUserContainer>
              <IconUserSVG />
            </IconUserContainer>
            <RightIconsContainer>
              <IconClosedEyeSVG />
              <IconHelpSVG />
              <IconMessagePlusSVG />
            </RightIconsContainer>
          </HeaderIconsContainer>
          <UserGreetings>Anderson Lobo</UserGreetings>
        </HeaderContainer>
      </Header>
      <Body />
    </Container>
  );
};

export default Home;
