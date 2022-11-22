import React from "react";
import { ContainerAbout } from "./About.styled";

const About = (props) => {
  const faCoffee = "faCoffee";
  return <ContainerAbout ref={props.refProp}>About</ContainerAbout>;
};

export default About;
