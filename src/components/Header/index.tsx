import { HeaderContainer, HeaderContent } from "./styles";
import imgLogo from "../../assets/dt-money-logo.svg";

export function Header() {
    return (
       < HeaderContainer>
            <HeaderContent> 
                <img src={imgLogo} alt="" />
                <button>New transaction</button>
            </HeaderContent>       
    </HeaderContainer>
    )
}