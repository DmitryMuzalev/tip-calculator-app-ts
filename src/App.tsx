import { Calculator } from "./components/Calculator";
import { Container } from "./components/Container";
import { ReactComponent as LogoIcon } from "assets/logo.svg";

function App() {
  return (
    <>
      <Container>
        <LogoIcon />
        <Calculator />
      </Container>
    </>
  );
}

export default App;
