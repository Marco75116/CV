import React, { useRef } from "react";
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
  const contactRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const aboutScroll = () => aboutRef.current.scrollIntoView();
  const homeScroll = () => homeRef.current.scrollIntoView();
  const contactScroll = () => contactRef.current.scrollIntoView();
  const servicesScroll = () => servicesRef.current.scrollIntoView();
  return (
    <ContainerAll>
      <Sidebar
        contact={contactScroll}
        services={servicesScroll}
        about={aboutScroll}
        home={homeScroll}
      />
      <ContainerContent>
        <Home refProp={homeRef} />
        <ContainerComponentsCenter>
          <About refProp={aboutRef} />
          <Services refProp={servicesRef} />
          <Resume />
          <Portfolio />
          <Testimonials />
          <Contact refProp={contactRef} />
        </ContainerComponentsCenter>
      </ContainerContent>
    </ContainerAll>
  );
};

export default ContainerComponents;
