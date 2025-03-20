import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import imgLogo from "../../assets/dt-money-logo.svg";

export function Header() {
    return (
       < HeaderContainer>
            <HeaderContent> 
                <img src={imgLogo} alt="" />
                <NewTransactionButton>New transaction</NewTransactionButton>
            </HeaderContent>       
    </HeaderContainer>
    )
}