import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Services from "./services/Services";
import Resume from "./resume/Resume";
import Portfolio from "./portfolio/Portfolio";
import Home from "./home/Home";
import About from "./about/About";
import Testimonials from "./testimonials/Testimonials";
import Contact from "./contact/Contact";
import {
  ContainerAll,
  ContainerContent,
  ContainerComponentsCenter,
} from "./ContainerComponents.styled";

const ContainerComponents = () => {
  return (
    <ContainerAll>
      <Sidebar />
      <ContainerContent>
        <Home />
        <ContainerComponentsCenter>
          <About />
          <Services />
          <Resume />
          <Portfolio />
          <Testimonials />
          <Contact />
        </ContainerComponentsCenter>
      </ContainerContent>
    </ContainerAll>
  );
};

export default ContainerComponents;
