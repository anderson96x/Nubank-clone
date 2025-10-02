import { Container, InnerContainer, IconWrapper } from "./style";
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
        <IconWrapper selected={true}>
          <SwitchVertical selected={true}/>
        </IconWrapper>
        <IconWrapper>
          <CurrencyDollar />
        </IconWrapper>
        <IconWrapper>
          <ShoppingBag />
        </IconWrapper>
        <IconWrapper>
          <Phone />
        </IconWrapper>
      </InnerContainer>
    </Container>
  );
}

export default MainButtons;
