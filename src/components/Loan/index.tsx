import {
  LoanContainer,
  LoanTextContainer,
  LoanChevronContainer,
  LoanLabel,
  Label,
} from "./style";
import ChevronRight from "$svg/ChevronRight";

function Loan() {
    return (
        <LoanContainer>
          <LoanTextContainer>
            <LoanLabel>Empréstimo</LoanLabel>
            <Label>Valor disponível de até</Label>
            <LoanLabel>R$ 125.000,00</LoanLabel>
          </LoanTextContainer>
          <LoanChevronContainer>
            <ChevronRight />
          </LoanChevronContainer>
        </LoanContainer>
    )
}

export default Loan;