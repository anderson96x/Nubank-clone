import BankServices from "../../components/BankServices";
import {
  IconClosedEyeSVG,
  IconMessagePlusSVG,
  IconHelpSVG,
  IconUserSVG,
} from "$svg/HeaderIcons";

import {
  BalanceContainer,
  BalanceLabel,
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
} from "./style";
import IconCard from "$svg/IconCard";

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
        <BalanceContainer>
          <BalanceLabel>Saldo em conta</BalanceLabel>
          <BalanceLabel>R$ 27.389,22</BalanceLabel>
        </BalanceContainer>
        <BankServices></BankServices>
        <MyCardsContainer>
          <MyCards_IconContainer>
            <IconCard />
          </MyCards_IconContainer>
          <MyCardsLabel>Meus cartões</MyCardsLabel>
        </MyCardsContainer>
      </Body>
    </Container>
  );
};

export default Home;
