import Sidebar from "./Components/sidebar/Sidebar";
import Services from "./Components/services/Services";
import Resume from "./Components/resume/Resume";
import Portfolio from "./Components/portfolio/Portfolio";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Testimonials from "./Components/testimonials/Testimonials";
import Contact from "./Components/contact/Contact";
import { ThemeProvider } from "styled-components";
import { main } from "./Theme.styled";

function App() {
  return (
    <>
      <ThemeProvider theme={main}>
        <Sidebar />
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
      </ThemeProvider>
    </>
  );
}

export default App;
