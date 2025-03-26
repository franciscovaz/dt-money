import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Site development</td>
                            <td><PriceHighlight type="income">€ 6000</PriceHighlight></td>
                            <td>Sale</td>
                            <td>20/03/2025</td>
                        </tr>
                        <tr>
                            <td width="50%">Dinner out</td>
                            <td><PriceHighlight type="outcome">-€ 100</PriceHighlight></td>
                            <td>Food</td>
                            <td>26/03/2025</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}