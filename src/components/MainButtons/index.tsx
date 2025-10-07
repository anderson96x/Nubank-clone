import {
  Container,
  InnerContainer,
  IconWrapper,
} from "./style";
import {
  CurrencyDollar,
  Phone,
  ShoppingBag,
  SwitchVertical,
} from "$svg/MainButtonsIcons";
import { FontAwesome } from "@expo/vector-icons";

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
          <SwitchVertical selected={true} />
        </IconWrapper>
        <IconWrapper>
          <CurrencyDollar />
        </IconWrapper>
        <IconWrapper>
          <ShoppingBag />
        </IconWrapper>
        <IconWrapper>
          <Phone />
            <FontAwesome name="circle" size={12} color="#8a19d6" style={{position: "absolute", right: 10, top: 5}} />
        </IconWrapper>
      </InnerContainer>
    </Container>
  );
}

export default MainButtons;
