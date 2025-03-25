import { ArrowCircleDown, ArrowCircleUp, CurrencyEur } from 'phosphor-react'
import { SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <div>
        <header>
          <span>Received</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>€3000.00</strong>
      </div>

      <div>
        <header>
          <span>Spendings</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>€3000.00</strong>
      </div>

      <div>
        <header>
          <span>Total</span>
          <CurrencyEur size={32} color="#fff" />
        </header>

        <strong>€3000.00</strong>
      </div>
    </SummaryContainer>
  )
}
