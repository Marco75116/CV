import ContainerComponents from "./Components/ContainerComponents";
import { ThemeProvider } from "styled-components";
import { main } from "./Theme.styled";

function App() {
  return (
    <>
      <ThemeProvider theme={main}>
        <ContainerComponents />
      </ThemeProvider>
    </>
  );
}

export default App;
