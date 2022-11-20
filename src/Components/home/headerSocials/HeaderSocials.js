import React from "react";
import {
  ContainerSocialsIcons,
  SocialLink,
  SocialIcon,
} from "./HeaderSolcials.styled";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const HeaderSocials = () => {
  return (
    <ContainerSocialsIcons>
      <SocialLink href="https://github.com/Marco75116" target="_blank">
        <SocialIcon icon={faGithub} color={"black"} />
      </SocialLink>
      <SocialLink
        href="https://www.linkedin.com/in/marc-antoine-ourradour/"
        target="_blank"
      >
        <SocialIcon icon={faLinkedin} color={"#0e76a8"} />
      </SocialLink>
      <SocialLink
        href="https://www.instagram.com/marcantoine668/"
        target="_blank"
      >
        <SocialIcon icon={faInstagram} color={"#E1306C"} />
      </SocialLink>
    </ContainerSocialsIcons>
  );
};

export default HeaderSocials;
