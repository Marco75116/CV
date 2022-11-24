import React from "react";
import {
  ContainerAbout,
  AboutSections,
  AboutTitle,
  AboutGrid,
  ImgProfile,
  DataGrid,
  TextDescriptions,
  ButtonDoawnload,
  Link,
} from "./About.styled";
import Me from "../../assets/avatar-2.svg";
import Cv from "../../doc/Ourradour Marc-Antoine.pdf";

const About = (props) => {
  const faCoffee = "faCoffee";
  return (
    <ContainerAbout ref={props.refProp}>
      <AboutSections>
        <AboutTitle>About Me</AboutTitle>

        <AboutGrid>
          <ImgProfile>
            <img style={{ height: "10rem" }} src={Me}></img>
          </ImgProfile>
          <DataGrid>
            <TextDescriptions>
              I'm enthusiastic about the blockchain ecosystem that the reason
              why i would like to be part of it. As I like challenges and I’m
              very motivated also, I’ve decided to learn and develop my
              technical skills in this field.
              <br />
              <br />
              👨‍🎓 &nbsp;&nbsp; Engineering student at{" "}
              <Link
                href="https://www.esilv.fr/en/programmes/master-degree-engineering/majors/fintech/"
                target="_blank"
              >
                ESILV
              </Link>{" "}
              , Paris La Défense.
              <br /> 👨‍💻 &nbsp;&nbsp; Web3 frontend developer at &nbsp;
              <Link href="https://www.pyratzlabs.com/" target="_blank">
                Pyratzlabs
              </Link>
              .
            </TextDescriptions>
            <a href={Cv} download>
              <ButtonDoawnload>Download cv</ButtonDoawnload>
            </a>
          </DataGrid>
        </AboutGrid>
      </AboutSections>
    </ContainerAbout>
  );
};

export default About;
