import React from "react";
import HeaderSocials from "./headerSocials/HeaderSocials";
import {
  ProfilSection,
  Profil,
  Img,
  Name,
  ProfilDescription,
  BouttonContact,
  HomeContainer,
} from "./Home.styled";
import Me from "../../assets/avatar-1.svg";

const Home = () => {
  return (
    <HomeContainer>
      <ProfilSection>
        <Profil>
          <Img src={Me}></Img>
          <Name>Marc-Antoine</Name>
          <ProfilDescription>Web3 front end developer</ProfilDescription>
          <HeaderSocials></HeaderSocials>
          <BouttonContact>Contact Me </BouttonContact>
        </Profil>
      </ProfilSection>
    </HomeContainer>
  );
};

export default Home;
