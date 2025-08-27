import { IconContainer, Container, Text, ButtonContainer } from "./style";

const BankServices: React.FC = () => {
  return (
    <Container>
      <ButtonContainer>
        <IconContainer></IconContainer>
        <Text>Área Pix e Transferir</Text>
      </ButtonContainer>
      <ButtonContainer>
        <IconContainer></IconContainer>
        <Text>Pagar</Text>
      </ButtonContainer>
    </Container>
  );
};

export default BankServices;
