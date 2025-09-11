import {
  CreditCardContainer,
  CreditCardTextContainer,
  CreditCardChevronContainer,
  CreditCardLabel,
  Label,
  LimitLabel,
} from "./style";
import ChevronRight from "$svg/ChevronRight";

function CreditCard() {
    return (
        <CreditCardContainer>
          <CreditCardTextContainer>
            <CreditCardLabel>Cartão de crédito</CreditCardLabel>
            <Label>Fatura atual</Label>
            <CreditCardLabel>R$ 8.549,81</CreditCardLabel>
            <LimitLabel>Limite disponível de R$ 187,92</LimitLabel>
          </CreditCardTextContainer>
          <CreditCardChevronContainer>
            <ChevronRight />
          </CreditCardChevronContainer>
        </CreditCardContainer>
    )
}

export default CreditCard;