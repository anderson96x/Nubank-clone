import BankServices from "../../components/BankServices";
import {
  IconClosedEyeSVG,
  IconMessagePlusSVG,
  IconHelpSVG,
  IconUserSVG,
} from "$svg/HeaderIcons";
import {
  Body,
  Container,
  Header,
  HeaderContainer,
  HeaderIconsContainer,
  IconUserContainer,
  MyCards_IconContainer,
  MyCardsContainer,
  MyCardsLabel,
  RightIconsContainer,
  UserGreetings,
  UserGreetingsContainer,
  Hr,
} from "./style";
import IconCard from "$svg/IconCard";
import CarouselMessages from "$components/CarouselMessages";
import BankBalance from "$components/BankBalance";

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
          <UserGreetingsContainer>
            <UserGreetings>Olá, Anderson Lobo</UserGreetings>
          </UserGreetingsContainer>
        </HeaderContainer>
      </Header>

      <Body>
        <BankBalance />
        <BankServices></BankServices>
        <MyCardsContainer>
          <MyCards_IconContainer>
            <IconCard />
          </MyCards_IconContainer>
          <MyCardsLabel>Meus cartões</MyCardsLabel>
        </MyCardsContainer>
        <CarouselMessages />
        <Hr />
      </Body>
    </Container>
  );
};

export default Home;
