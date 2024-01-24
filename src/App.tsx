import { Calculator } from "./components/Calculator";
import { Container } from "./components/Container";
import { ReactComponent as LogoIcon } from "assets/logo.svg";

//! Что нужно и можно доделать:

/* 
    !Сделать рефакторинг:
    Можно использовать HOC, например для валидации полей 
    Использовать контекст для State

    *Так же можно расширить валидацию: 
      1. Select Tip не больше 100%
      2. Number of people - только целые числа 

*/

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
