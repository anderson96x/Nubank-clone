import { FlatList } from "react-native";
import { IconContainer, Container, Text, ButtonContainer } from "./style";
import { IconPagar, IconPix, IconRecarga } from "$svg/BankServicesIcons";
import { IconsPNG_black } from "@/assets/png/BankServicesIcons_PNG";

const BankServices: React.FC = () => {
  const DATA = [
    { id: 1, title: "Área Pix\ne Transferir", icon: IconsPNG_black.IconPix, firstIcon: true },
    { id: 2, title: "Pagar", icon: <IconPagar /> },
    { id: 3, title: "Pegar\nemprestado", icon: IconsPNG_black.IconPegarEmprestado },
    { id: 4, title: "Caixinha\nTurbo", icon: IconsPNG_black.IconCaixinhas },
    { id: 5, title: "Recarga\nde celular", icon: <IconRecarga /> },
    { id: 6, title: "Caixinhas\ne Investir", icon: IconsPNG_black.IconCaixinhas },
  ];
  return (
    <Container>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={DATA}
        renderItem={({ item }) => (
          // Trying to get the icons to scroll as the app does
          <ButtonContainer style={{marginLeft: item.firstIcon ? 20 : 0}}>
            <IconContainer>{item.icon}</IconContainer>
            <Text>{item.title}</Text>
          </ButtonContainer>
        )}
      ></FlatList>
    </Container>
  );
};

export default BankServices;
