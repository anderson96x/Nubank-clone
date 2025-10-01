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
import CreditCard from "$components/CreditCard";
import { ScrollView, View } from "react-native";
import Loan from "$components/Loan";
import FindOutMore from "$components/FindOutMore";
import RateThisScreen from "$components/RateThisScreen";
import MainButtons from "$components/MainButtons";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
            <CreditCard />
            <Hr />
            <Loan />
            <Hr />
            <FindOutMore />
            <RateThisScreen />
          </Body>
        </Container>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 25,
          left: 0,
          right: 0,
        }}
      >
        <MainButtons />
      </View>
    </View>
  );
};

export default Home;
