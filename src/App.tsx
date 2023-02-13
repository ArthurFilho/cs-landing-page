import { GlobalStyle } from "./styles/global";
import { LogoSalurt, MainDiv } from "./styles/styles";
import Logo from "../src/assets/logo.png"

export function App() {
  
  return (
    <>
    <GlobalStyle />

    <MainDiv>
    <LogoSalurt src={Logo} />
    </MainDiv>
    </>
  )
}

