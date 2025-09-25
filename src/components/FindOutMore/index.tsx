import { FlatList, Image } from "react-native";
import {
  Container,
  Description,
  InnerContainer,
  FindOutMoreLabel,
  PicContainer,
  Label,
  ButtonPill,
  ButtonPillText,
  ButtonContainer,
} from "./style";

const FindOutMore: React.FC = () => {
  const DATA = [
    {
      id: 1,
      picture: require("@/assets/jpg/artem-kniaz-DqgMHzeio7g-unsplash.jpg"),
      title: "Conta para menores de 18",
      description: "Solicite a conta para seus filhos a partir de 6 anos.",
      buttonText: "Começar",
      first: true,
    },
    {
      id: 2,
      picture: require("@/assets/jpg/rahul-mishra-o4SzxPgMwV8-unsplash.jpg"),
      title: "Projeto de demonstração",
      description: "Projeto desenvolvido em React Native / Expo",
      buttonText: "Conhecer",
    },
    {
      id: 3,
      picture: require("@/assets/jpg/helena-lopes-e3OUQGT9bWU-unsplash.jpg"),
      title: "Seguro Vida",
      description:
        "Cuide de quem você ama de um jeito simples e que cabe no seu bolso.",
      buttonText: "Conhecer",
    },
    {
      id: 4,
      picture: require("@/assets/jpg/anderson96x_Github.jpg"),
      title: "Deixe sua estrela no Github",
      description: "Se gostou, deixe sua ⭐ para fortalecer o projeto",
      buttonText: "Apoiar",
    },
    {
      id: 5,
      picture: require("@/assets/jpg/nubank_logo.jpg"),
      title: "Todos os direitos reservados ao Nubank",
      description:
        "Este projeto não tem por intenção simular o aplicativo oficial.",
      buttonText: "Entendido",
    },
  ];
  return (
    <Container>
      <FindOutMoreLabel>Descubra mais</FindOutMoreLabel>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={DATA}
        renderItem={({ item }) => (
          <InnerContainer style={{ marginLeft: item.first ? 20 : 0 }}>
            <PicContainer>
              <Image
                source={item.picture}
                style={{
                  width: 240,
                  height: 120,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
            </PicContainer>
            <Label>{item.title}</Label>
            <Description>{item.description}</Description>
            <ButtonContainer>
              <ButtonPill>
                <ButtonPillText>{item.buttonText}</ButtonPillText>
              </ButtonPill>
            </ButtonContainer>
          </InnerContainer>
        )}
      ></FlatList>
    </Container>
  );
};

export default FindOutMore;
