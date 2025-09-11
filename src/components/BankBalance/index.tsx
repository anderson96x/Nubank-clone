import {
  BalanceContainer,
  BalanceTextContainer,
  BalanceChevronContainer,
  BalanceLabel,
} from "./style";
import ChevronRight from "$svg/ChevronRight";

function BankBalance() {
    return (
        <BalanceContainer>
          <BalanceTextContainer>
            <BalanceLabel>Saldo em conta</BalanceLabel>
            <BalanceLabel>R$ 27.389,22</BalanceLabel>
          </BalanceTextContainer>
          <BalanceChevronContainer>
            <ChevronRight />
          </BalanceChevronContainer>
        </BalanceContainer>
    )
}

export default BankBalance;