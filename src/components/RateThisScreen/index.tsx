import {
  RateThisScreenContainer,
  RateThisScreenTextContainer,
  RateThisScreenLabel
} from "./style";
import { FontAwesome } from "@expo/vector-icons";

function RateThisScreen() {
    return (
        <RateThisScreenContainer>
          <RateThisScreenTextContainer>
            <FontAwesome name="heart-o" size={24} color="#8a19d6" />
            <RateThisScreenLabel> Avalie esta tela</RateThisScreenLabel>
          </RateThisScreenTextContainer>
        </RateThisScreenContainer>
    )
}

export default RateThisScreen;