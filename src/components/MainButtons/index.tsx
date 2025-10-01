import { Container, InnerContainer } from "./style";
import {
  CurrencyDollar,
  Phone,
  ShoppingBag,
  SwitchVertical,
} from "$svg/MainButtonsIcons";

function MainButtons() {
  return (
    <Container>
      <InnerContainer
        style={{
          shadowColor: "#a5a4a4",
          elevation: 1,
        }}
      >
        <SwitchVertical />
        <CurrencyDollar />
        <ShoppingBag />
        <Phone />
      </InnerContainer>
    </Container>
  );
}

export default MainButtons;
